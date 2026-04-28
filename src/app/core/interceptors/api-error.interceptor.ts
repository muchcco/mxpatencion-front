import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SKIP_GLOBAL_ERROR } from '../models/http-context-tokens.model';
import { ApiBaseService } from '../services/api-base.service';
import { NotificationService } from '../services/notification.service';
import { SessionContextService } from '../services/session-context.service';
import {
  TAB_LOCK_BLOCKED_MESSAGE,
  TabLockService
} from '../services/tab-lock.service';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {
  public constructor(
    private readonly apiBaseService: ApiBaseService,
    private readonly notificationService: NotificationService,
    private readonly router: Router,
    private readonly sessionContextService: SessionContextService,
    private readonly tabLockService: TabLockService
  ) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: unknown) => {
        if (!(error instanceof HttpErrorResponse)) {
          return throwError(() => error);
        }

        const skipGlobalHandling = request.context.get(SKIP_GLOBAL_ERROR);

        if (this.isSessionAlreadyActive(error)) {
          const shouldAlert = this.tabLockService.blockFromBackend();

          this.sessionContextService.setAnonymous(TAB_LOCK_BLOCKED_MESSAGE);

          if (shouldAlert) {
            window.alert(TAB_LOCK_BLOCKED_MESSAGE);
          }

          void this.router.navigate(['/sesion/bloqueada'], {
            queryParams: {
              reason: 'backend-session-active',
              redirectTo: this.resolveCleanPath(this.router.url)
            },
            replaceUrl: true
          });

          return throwError(() => error);
        }

        if (!skipGlobalHandling && (error.status === 401 || error.status === 419)) {
          this.sessionContextService.setAnonymous(
            'La sesion institucional expiro o no es valida.'
          );
          void this.router.navigate(['/sesion/bootstrap'], {
            queryParams: {
              reason: 'session-expired'
            }
          });
        }

        const shouldNotify =
          this.apiBaseService.isApiRequest(request.url) && !skipGlobalHandling;

        if (shouldNotify) {
          this.notificationService.error(
            'No se pudo completar la solicitud',
            this.resolveMessage(error)
          );
        }

        return throwError(() => error);
      })
    );
  }

  private resolveMessage(error: HttpErrorResponse): string {
    if (!navigator.onLine) {
      return 'Verifica la conectividad antes de continuar.';
    }

    const apiMessage =
      (error.error as { message?: string } | null)?.message ?? error.message;

    if (error.status === 0) {
      return 'No hubo respuesta del servidor o la red esta lenta.';
    }

    return apiMessage || 'Ocurrio un problema inesperado con la API.';
  }

  private isSessionAlreadyActive(error: HttpErrorResponse): boolean {
    if (error.status !== 409) {
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

  private resolveCleanPath(url: string): string {
    const cleanPath = url.split('?')[0] || '/dashboard';
    return cleanPath === '/' ? '/dashboard' : cleanPath;
  }
}
