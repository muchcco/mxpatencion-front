import { HttpClient, HttpContext, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  catchError,
  finalize,
  map,
  shareReplay,
  switchMap,
  tap
} from 'rxjs/operators';
import { ApiResponse } from '../../../core/models/api-response.model';
import { Asesor } from '../../../core/models/asesor.model';
import { SKIP_GLOBAL_ERROR } from '../../../core/models/http-context-tokens.model';
import { ApiBaseService } from '../../../core/services/api-base.service';
import { SessionContextService } from '../../../core/services/session-context.service';
import {
  TAB_LOCK_BLOCKED_MESSAGE,
  TabLockService
} from '../../../core/services/tab-lock.service';

@Injectable({
  providedIn: 'root'
})
export class AuthSessionService {
  private activeRequest$: Observable<Asesor> | null = null;

  public constructor(
    private readonly http: HttpClient,
    private readonly apiBaseService: ApiBaseService,
    private readonly sessionContextService: SessionContextService,
    private readonly tabLockService: TabLockService
  ) {}

  public ensureSession(force = false): Observable<Asesor> {
    if (this.tabLockService.isBlocked) {
      return throwError(() => new Error(TAB_LOCK_BLOCKED_MESSAGE));
    }

    const session = this.sessionContextService.snapshot;

    if (!force && session.status === 'authenticated' && session.asesor) {
      return of(session.asesor);
    }

    if (!force && this.activeRequest$) {
      return this.activeRequest$;
    }

    const silentContext = new HttpContext().set(SKIP_GLOBAL_ERROR, true);
    const meEndpoint = this.apiBaseService.buildUrl('me');

    this.sessionContextService.setLoading('Validando sesion activa...');
    console.debug('[SSO] Verificando sesion actual', {
      endpoint: meEndpoint
    });

    const request$ = this.getProfileRequest(silentContext).pipe(
      tap((asesor) => {
        console.debug('[SSO] Respuesta de /me', asesor);
        this.sessionContextService.setAuthenticated(asesor, 'Sesion activa.');
      }),
      catchError((error: unknown) => {
        console.error('[SSO] Error al consultar /me', error);

        if (this.shouldSkipSessionStateError(error)) {
          return throwError(() => error);
        }

        if (
          error instanceof HttpErrorResponse &&
          (error.status === 401 || error.status === 419)
        ) {
          this.sessionContextService.setAnonymous(
            'No existe una sesion activa en el backend.'
          );
        } else {
          this.sessionContextService.setError(
            this.resolveErrorMessage(
              error,
              'No fue posible validar la sesion institucional.'
            )
          );
        }

        return throwError(() => error);
      }),
      finalize(() => {
        this.activeRequest$ = null;
      }),
      shareReplay(1)
    );

    this.activeRequest$ = request$;
    return request$;
  }

  public ssoCallback(payload: {
    token?: string | null;
    rt?: string | null;
  }): Observable<Asesor> {
    if (this.tabLockService.isBlocked) {
      return throwError(() => new Error(TAB_LOCK_BLOCKED_MESSAGE));
    }

    const requestPayload = payload.token
      ? { token: payload.token }
      : payload.rt
        ? { rt: payload.rt }
        : null;

    if (!requestPayload) {
      this.sessionContextService.setError(
        'No se recibio token o rt en la URL de retorno SSO.'
      );
      return throwError(() => new Error('Missing SSO payload'));
    }

    if (this.activeRequest$) {
      return this.activeRequest$;
    }

    const silentContext = new HttpContext().set(SKIP_GLOBAL_ERROR, true);
    const callbackEndpoint = this.apiBaseService.buildUrl('auth/sso/callback');
    const meEndpoint = this.apiBaseService.buildUrl('me');

    this.sessionContextService.setLoading(
      'Resolviendo acceso SSO con el backend Laravel...'
    );
    console.debug('[SSO] Iniciando callback SSO', {
      endpoint: callbackEndpoint,
      hasToken: Boolean(payload.token),
      hasRt: Boolean(payload.rt)
    });

    const request$ = this.http
      .post<ApiResponse<unknown>>(
        callbackEndpoint,
        requestPayload,
        {
          context: silentContext,
          withCredentials: true
        }
      )
      .pipe(
        tap((response) => {
          console.debug('[SSO] Respuesta del callback', response);
        }),
        switchMap(() => this.getProfileRequest(silentContext)),
        tap((asesor) => {
          console.debug('[SSO] Respuesta de /me luego del callback', asesor);
          this.sessionContextService.setAuthenticated(
            asesor,
            'Ingreso SSO validado correctamente.'
          );
        }),
        catchError((error: unknown) => {
          console.error('[SSO] Error detallado en callback SSO', error);

          if (this.shouldSkipSessionStateError(error)) {
            return throwError(() => error);
          }

          this.sessionContextService.setError(
            this.resolveSsoCallbackErrorMessage(
              error,
              callbackEndpoint,
              meEndpoint
            )
          );
          return throwError(() => error);
        }),
        finalize(() => {
          this.activeRequest$ = null;
        }),
        shareReplay(1)
      );

    this.activeRequest$ = request$;
    return request$;
  }

  public resolveSsoCallback(payload: {
    token?: string | null;
    rt?: string | null;
  }): Observable<Asesor> {
    return this.ssoCallback(payload);
  }

  public refreshProfile(): Observable<Asesor> {
    if (this.tabLockService.isBlocked) {
      return throwError(() => new Error(TAB_LOCK_BLOCKED_MESSAGE));
    }

    return this.getProfileRequest().pipe(
      tap((asesor) => this.sessionContextService.setAuthenticated(asesor))
    );
  }

  public logout(): Observable<void> {
    if (this.tabLockService.isBlocked) {
      return throwError(() => new Error(TAB_LOCK_BLOCKED_MESSAGE));
    }

    const silentContext = new HttpContext().set(SKIP_GLOBAL_ERROR, true);

    return this.http
      .post<ApiResponse<unknown>>(
        this.apiBaseService.buildUrl('session/logout'),
        {},
        {
          context: silentContext,
          withCredentials: true
        }
      )
      .pipe(
        map(() => undefined),
        tap(() => this.sessionContextService.reset()),
        catchError((error: unknown) => {
          console.error('[SSO] Error al cerrar sesion', error);
          this.sessionContextService.reset();
          return throwError(() => error);
        })
      );
  }

  private getProfileRequest(context?: HttpContext): Observable<Asesor> {
    const meEndpoint = this.apiBaseService.buildUrl('me');

    return this.http
      .get<ApiResponse<Asesor>>(meEndpoint, {
        context,
        withCredentials: true
      })
      .pipe(
        map((response) => this.normalizeAsesor(this.apiBaseService.unwrap(response)))
      );
  }

  private normalizeAsesor(asesor: Asesor): Asesor {
    const rawAsesor = asesor as Asesor & {
      name?: string | null;
      nombre?: string | null;
      name_compl?: string | null;
      nombre_completo?: string | null;
      apellido?: string | null;
      correo?: string | null;
      dni?: string | null;
      documento_numero?: string | null;
      region_codigo?: string | null;
      region_nombre?: string | null;
      sede_nombre?: string | null;
      auth_roles?: string[] | string | null;
      rol?: string | string[] | null;
      roles?: Array<
        | string
        | {
            nombre?: string | null;
            name?: string | null;
            codigo?: string | null;
            role?: string | null;
          }
      > | null;
      permissions?: Array<
        | string
        | {
            codigo?: string | null;
            nombre?: string | null;
            action?: string | null;
            ActionName?: string | null;
          }
      > | null;
      listPermission?: Array<
        | string
        | {
            ActionName?: string | null;
            ActionUrl?: string | null;
            PathCode?: string | null;
          }
      > | null;
    };

    return {
      ...rawAsesor,
      id: rawAsesor.id ?? '',
      nombres:
        rawAsesor.nombres?.trim() ||
        rawAsesor.nombre?.trim() ||
        rawAsesor.name?.trim() ||
        '',
      apellidos:
        rawAsesor.apellidos?.trim() ||
        rawAsesor.apellido?.trim() ||
        '',
      nombreCompleto:
        rawAsesor.nombreCompleto?.trim() ||
        rawAsesor.nombre_completo?.trim() ||
        rawAsesor.name_compl?.trim() ||
        [rawAsesor.nombres, rawAsesor.apellidos].filter(Boolean).join(' ').trim(),
      email: rawAsesor.email?.trim() || rawAsesor.correo?.trim() || null,
      documento:
        rawAsesor.documento?.trim() ||
        rawAsesor.dni?.trim() ||
        rawAsesor.documento_numero?.trim() ||
        null,
      regionCodigo:
        rawAsesor.regionCodigo?.trim() || rawAsesor.region_codigo?.trim() || null,
      regionNombre:
        rawAsesor.regionNombre?.trim() || rawAsesor.region_nombre?.trim() || null,
      sedeNombre:
        rawAsesor.sedeNombre?.trim() || rawAsesor.sede_nombre?.trim() || null,
      roles: this.resolveRoles(rawAsesor),
      permissions: this.resolvePermissions(rawAsesor)
    };
  }

  private resolveRoles(
    asesor: Asesor & {
      auth_roles?: string[] | string | null;
      rol?: string | string[] | null;
      roles?: Array<
        | string
        | {
            nombre?: string | null;
            name?: string | null;
            codigo?: string | null;
            role?: string | null;
          }
      > | null;
    }
  ): string[] {
    const values: string[] = [];

    const appendStringArray = (input: unknown): void => {
      if (Array.isArray(input)) {
        input
          .map((item) => {
            if (typeof item === 'string') {
              return item;
            }

            if (item && typeof item === 'object') {
              const roleLike = item as {
                nombre?: string | null;
                name?: string | null;
                codigo?: string | null;
                role?: string | null;
              };

              return (
                roleLike.nombre ||
                roleLike.name ||
                roleLike.codigo ||
                roleLike.role ||
                ''
              );
            }

            return '';
          })
          .filter(Boolean)
          .forEach((item) => values.push(String(item)));
      }
    };

    appendStringArray(asesor.roles);
    appendStringArray(asesor.auth_roles);
    appendStringArray(asesor.rol);

    if (typeof asesor.rol === 'string') {
      values.push(asesor.rol);
    }

    if (typeof asesor.auth_roles === 'string') {
      values.push(asesor.auth_roles);
    }

    if (typeof asesor.cargo === 'string' && asesor.cargo.trim()) {
      values.push(asesor.cargo);
    }

    return Array.from(
      new Set(
        values
          .map((value) => value.trim())
          .filter(Boolean)
      )
    );
  }

  private resolvePermissions(
    asesor: Asesor & {
      permissions?: Array<
        | string
        | {
            codigo?: string | null;
            nombre?: string | null;
            action?: string | null;
            ActionName?: string | null;
          }
      > | null;
      listPermission?: Array<
        | string
        | {
            ActionName?: string | null;
            ActionUrl?: string | null;
            PathCode?: string | null;
          }
      > | null;
    }
  ): string[] {
    const values: string[] = [];

    for (const permission of asesor.permissions || []) {
      if (typeof permission === 'string') {
        values.push(permission);
        continue;
      }

      const permissionLike = permission as {
        codigo?: string | null;
        nombre?: string | null;
        action?: string | null;
        ActionName?: string | null;
      };

      values.push(
        permissionLike.codigo ||
          permissionLike.nombre ||
          permissionLike.action ||
          permissionLike.ActionName ||
          ''
      );
    }

    for (const permission of asesor.listPermission || []) {
      if (typeof permission === 'string') {
        values.push(permission);
        continue;
      }

      const permissionLike = permission as {
        ActionName?: string | null;
        ActionUrl?: string | null;
        PathCode?: string | null;
      };

      values.push(
        permissionLike.ActionName ||
          permissionLike.ActionUrl ||
          permissionLike.PathCode ||
          ''
      );
    }

    return Array.from(
      new Set(values.map((value) => value.trim()).filter(Boolean))
    );
  }

  private resolveErrorMessage(error: unknown, fallback: string): string {
    if (!(error instanceof HttpErrorResponse)) {
      return fallback;
    }

    const backendMessage =
      this.resolveHttpErrorPayloadMessage(error.error) ?? error.message;

    return backendMessage
      ? `${fallback} Detalle backend: ${backendMessage}`
      : `${fallback} HTTP ${error.status}.`;
  }

  private resolveSsoCallbackErrorMessage(
    error: unknown,
    callbackEndpoint: string,
    meEndpoint: string
  ): string {
    if (!(error instanceof HttpErrorResponse)) {
      return [
        'No fue posible resolver el acceso SSO con el backend.',
        'status=unknown.',
        `url_backend=${callbackEndpoint}.`,
        `message=${String(error)}.`,
        `callback_endpoint=${callbackEndpoint}.`,
        `me_endpoint=${meEndpoint}.`
      ].join(' ');
    }

    const status = Number.isFinite(error.status) ? error.status : 0;
    const backendUrl = error.url || callbackEndpoint;
    const backendMessage =
      this.resolveHttpErrorPayloadMessage(error.error) ||
      error.message ||
      'Sin mensaje de backend.';

    return [
      'No fue posible resolver el acceso SSO con el backend.',
      `status=${status}.`,
      `url_backend=${backendUrl}.`,
      `message=${backendMessage}.`,
      `callback_endpoint=${callbackEndpoint}.`,
      `me_endpoint=${meEndpoint}.`
    ].join(' ');
  }

  private resolveHttpErrorPayloadMessage(errorPayload: unknown): string | null {
    if (!errorPayload) {
      return null;
    }

    if (typeof errorPayload === 'string') {
      const trimmedPayload = errorPayload.trim();
      return trimmedPayload || null;
    }

    if (typeof errorPayload === 'object') {
      const messageCandidate = (errorPayload as { message?: unknown }).message;

      if (typeof messageCandidate === 'string') {
        const trimmedMessage = messageCandidate.trim();

        if (trimmedMessage) {
          return trimmedMessage;
        }
      }

      try {
        return JSON.stringify(errorPayload);
      } catch {
        return null;
      }
    }

    return null;
  }

  private shouldSkipSessionStateError(error: unknown): boolean {
    return this.tabLockService.isBlocked || this.isSessionAlreadyActiveError(error);
  }

  private isSessionAlreadyActiveError(error: unknown): boolean {
    if (!(error instanceof HttpErrorResponse) || error.status !== 409) {
      return false;
    }

    return this.resolveMetaReason(error.error) === 'SESSION_ALREADY_ACTIVE';
  }

  private resolveMetaReason(errorPayload: unknown): string | null {
    if (!errorPayload || typeof errorPayload !== 'object') {
      return null;
    }

    const meta = (errorPayload as { meta?: unknown }).meta;

    if (!meta || typeof meta !== 'object') {
      return null;
    }

    const reason = (meta as { reason?: unknown }).reason;
    return typeof reason === 'string' ? reason : null;
  }
}
