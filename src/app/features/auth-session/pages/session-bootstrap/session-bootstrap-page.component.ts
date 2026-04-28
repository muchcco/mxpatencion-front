import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { SessionStatus } from '../../../../core/models/session-context.model';
import { SessionContextService } from '../../../../core/services/session-context.service';
import { environment } from '../../../../../environments/environment';
import { AuthSessionService } from '../../services/auth-session.service';

@Component({
  selector: 'app-session-bootstrap-page',
  templateUrl: './session-bootstrap-page.component.html',
  styleUrls: ['./session-bootstrap-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionBootstrapPageComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private countdownTimer: ReturnType<typeof window.setInterval> | null = null;
  private redirectingToLogin = false;
  private redirectingToShell = false;
  private callbackQueryCleared = false;

  public readonly session$ = this.sessionContextService.state$;
  public redirectTo = '/dashboard';
  public mode: 'bootstrap' | 'callback' = 'bootstrap';
  public countdownSeconds = 10;
  public sessionExpired = false;
  private callbackPayload: { token?: string | null; rt?: string | null } = {};

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly authSessionService: AuthSessionService,
    private readonly router: Router,
    private readonly sessionContextService: SessionContextService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.mode =
      this.activatedRoute.snapshot.routeConfig?.path === 'callback'
        ? 'callback'
        : 'bootstrap';
    this.redirectTo = this.resolveRedirectTarget(
      this.activatedRoute.snapshot.queryParamMap.get('redirectTo')
    );
    this.callbackPayload = {
      token: this.activatedRoute.snapshot.queryParamMap.get('token'),
      rt: this.activatedRoute.snapshot.queryParamMap.get('rt')
    };
    console.debug('[SSO Callback] Query params recibidos', {
      mode: this.mode,
      redirectTo: this.redirectTo,
      token: this.maskValue(this.callbackPayload.token),
      rt: this.maskValue(this.callbackPayload.rt)
    });

    this.sessionContextService.state$
      .pipe(takeUntil(this.destroy$))
      .subscribe((session) => {
        if (session.status === 'authenticated') {
          this.handleAuthenticatedSession();
        }
      });

    if (this.mode === 'callback' && !this.hasSsoPayload()) {
      this.startExpiredSessionFlow();
      return;
    }

    if (
      this.sessionContextService.snapshot.status !== 'loading' &&
      !this.sessionExpired
    ) {
      this.retry();
    }
  }

  public ngOnDestroy(): void {
    this.stopCountdown();
    this.destroy$.next();
    this.destroy$.complete();
  }

  public retry(): void {
    if (this.sessionExpired) {
      return;
    }

    const request$ = this.hasSsoPayload()
      ? this.authSessionService.ssoCallback(this.callbackPayload)
      : this.authSessionService.ensureSession(true);

    request$.pipe(take(1)).subscribe({
      error: (error: unknown) => {
        if (this.shouldHandleAsExpired(error)) {
          this.startExpiredSessionFlow();
        }

        return;
      }
    });
  }

  public goToLoginNow(): void {
    if (this.redirectingToLogin) {
      return;
    }

    this.redirectingToLogin = true;
    this.stopCountdown();

    const loginUrl = this.buildLoginUrl();
    console.debug('[SSO Callback] Redirigiendo al login', {
      loginUrl,
      redirectTo: this.redirectTo
    });

    window.location.assign(loginUrl);
  }

  public resolveTitle(status: SessionStatus): string {
    if (this.sessionExpired) {
      return 'Sesion expirada';
    }

    if (status === 'error' || status === 'anonymous') {
      return this.hasSsoPayload()
        ? 'Error al resolver acceso SSO'
        : 'No se pudo validar la sesion';
    }

    if (status === 'authenticated') {
      return 'Sesion validada';
    }

    return this.hasSsoPayload()
      ? 'Procesando acceso SSO'
      : 'Validando sesion institucional';
  }

  public resolveSubtitle(status: SessionStatus): string {
    if (this.sessionExpired) {
      return 'Su sesion ha caducado.';
    }

    if (status === 'error' || status === 'anonymous') {
      return this.hasSsoPayload()
        ? 'El backend no pudo resolver el callback SSO o no emitio la sesion esperada.'
        : 'No se encontro una sesion activa para continuar con el shell principal.';
    }

    return this.hasSsoPayload()
      ? 'Angular solo captura token o rt desde la URL, los entrega al backend Laravel y espera la sesion segura resultante.'
      : 'El frontend verifica si ya existe una sesion/cookie valida para el asesor antes de ingresar al shell principal.';
  }

  public resolveTone(
    status: SessionStatus
  ): 'default' | 'success' | 'warning' | 'danger' | 'info' {
    switch (status) {
      case 'authenticated':
        return 'success';
      case 'loading':
        return 'info';
      case 'error':
        return 'danger';
      case 'anonymous':
        return 'warning';
      default:
        return 'default';
    }
  }

  public hasSsoPayload(): boolean {
    return Boolean(this.callbackPayload.token || this.callbackPayload.rt);
  }

  private resolveRedirectTarget(redirectTo: string | null): string {
    if (!redirectTo || redirectTo === '/') {
      return '/dashboard';
    }

    if (!redirectTo.startsWith('/')) {
      return '/dashboard';
    }

    return redirectTo;
  }

  private shouldHandleAsExpired(error: unknown): boolean {
    if (!(error instanceof HttpErrorResponse)) {
      return false;
    }

    if (this.hasSsoPayload()) {
      return false;
    }

    if (error.status === 401 || error.status === 419) {
      return true;
    }

    return error.status === 400 || error.status === 422;
  }

  private handleAuthenticatedSession(): void {
    if (this.redirectingToShell) {
      return;
    }

    this.redirectingToShell = true;
    console.debug('[SSO Callback] Sesion autenticada, redirigiendo', {
      redirectTo: this.redirectTo
    });

    if (this.mode === 'callback' && this.hasSsoPayload()) {
      void this.clearSensitiveQueryParams().finally(() => {
        void this.router.navigateByUrl(this.redirectTo);
      });
      return;
    }

    void this.router.navigateByUrl(this.redirectTo);
  }

  private startExpiredSessionFlow(): void {
    if (this.sessionExpired) {
      return;
    }

    this.sessionExpired = true;
    this.countdownSeconds = 10;
    this.sessionContextService.setAnonymous('Su sesion ha caducado.');
    this.startCountdown();
    this.changeDetectorRef.markForCheck();
  }

  private startCountdown(): void {
    this.stopCountdown();
    this.countdownTimer = window.setInterval(() => {
      if (this.countdownSeconds <= 1) {
        this.countdownSeconds = 0;
        this.changeDetectorRef.markForCheck();
        this.goToLoginNow();
        return;
      }

      this.countdownSeconds -= 1;
      this.changeDetectorRef.markForCheck();
    }, 1000);
  }

  private stopCountdown(): void {
    if (this.countdownTimer) {
      window.clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
  }

  private buildLoginUrl(): string {
    const loginUrl = new URL(environment.authLoginUrl, window.location.origin);
    loginUrl.searchParams.set('redirectTo', this.redirectTo);
    return loginUrl.toString();
  }

  private clearSensitiveQueryParams(): Promise<boolean> {
    if (this.callbackQueryCleared) {
      return Promise.resolve(true);
    }

    this.callbackQueryCleared = true;
    console.debug('[SSO Callback] Limpiando token/rt de la URL');

    this.callbackPayload = {};

    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {},
      replaceUrl: true
    });
  }

  private maskValue(value?: string | null): string | null {
    if (!value) {
      return null;
    }

    if (value.length <= 12) {
      return value;
    }

    return `${value.slice(0, 6)}...${value.slice(-6)}`;
  }
}
