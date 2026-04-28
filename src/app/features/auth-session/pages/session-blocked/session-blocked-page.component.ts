import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import {
  TAB_LOCK_BLOCKED_MESSAGE,
  TabLockState,
  TabLockService
} from '../../../../core/services/tab-lock.service';

@Component({
  selector: 'app-session-blocked-page',
  templateUrl: './session-blocked-page.component.html',
  styleUrls: ['./session-blocked-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionBlockedPageComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  public readonly state$ = this.tabLockService.state$;
  public readonly message = TAB_LOCK_BLOCKED_MESSAGE;
  public redirectTo = '/dashboard';

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly router: Router,
    private readonly tabLockService: TabLockService
  ) {}

  public ngOnInit(): void {
    this.redirectTo = this.resolveRedirectTarget(
      this.activatedRoute.snapshot.queryParamMap.get('redirectTo')
    );

    this.tabLockService.initialize();

    this.tabLockService.state$
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        if (state.status === 'active') {
          void this.router.navigateByUrl(this.redirectTo);
          return;
        }

        this.changeDetectorRef.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public retry(): void {
    if (this.tabLockService.retryAcquire() && this.tabLockService.canUseApp) {
      void this.router.navigateByUrl(this.redirectTo);
    }
  }

  public goToLogin(): void {
    this.tabLockService.clearBackendBlock();
    this.tabLockService.releaseLock();

    const loginUrl = new URL(environment.authLoginUrl, window.location.origin);
    loginUrl.searchParams.set('redirectTo', this.redirectTo);
    window.location.assign(loginUrl.toString());
  }

  public isBackendBlocked(state: TabLockState): boolean {
    return state.reason === 'backend-session-active';
  }

  public resolveDetail(state: TabLockState): string {
    if (this.isBackendBlocked(state)) {
      return 'El backend informo que ya existe una sesion activa para este usuario. Vuelve a ingresar cuando la otra sesion se cierre.';
    }

    return 'Esta pestaña se habilitara automaticamente cuando la ventana activa cierre o cuando el heartbeat de la otra pestaña caduque.';
  }

  private resolveRedirectTarget(redirectTo: string | null): string {
    if (!redirectTo || redirectTo === '/' || !redirectTo.startsWith('/')) {
      return '/dashboard';
    }

    return redirectTo;
  }
}
