import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, take } from 'rxjs/operators';
import { AuthSessionService } from '../../features/auth-session/services/auth-session.service';
import { SessionContextService } from '../services/session-context.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate, CanActivateChild {
  public constructor(
    private readonly authSessionService: AuthSessionService,
    private readonly router: Router,
    private readonly sessionContextService: SessionContextService
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.resolveAccess(route, state);
  }

  public canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.resolveAccess(route, state);
  }

  private resolveAccess(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const token = route.queryParamMap.get('token');
    const rt = route.queryParamMap.get('rt');

    if (token || rt) {
      console.debug('[SSO Guard] token/rt detectado en ruta protegida', {
        hasToken: Boolean(token),
        hasRt: Boolean(rt),
        redirectTo: this.resolveCleanPath(state.url)
      });

      return of(
        this.router.createUrlTree(['/auth/callback'], {
          queryParams: {
            ...(token ? { token } : {}),
            ...(rt ? { rt } : {}),
            redirectTo: this.resolveCleanPath(state.url)
          }
        })
      );
    }

    const session = this.sessionContextService.snapshot;

    if (session.status === 'authenticated') {
      return of(true);
    }

    if (session.status === 'loading') {
      return this.waitForResolution(state);
    }

    return this.authSessionService.ensureSession().pipe(
      map(() => true),
      catchError(() => of(this.redirectToBootstrap(state)))
    );
  }

  private waitForResolution(
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.sessionContextService.state$.pipe(
      filter((session) => session.status !== 'loading'),
      take(1),
      map((session) =>
        session.status === 'authenticated'
          ? true
          : this.redirectToBootstrap(state)
      )
    );
  }

  private redirectToBootstrap(state: RouterStateSnapshot): UrlTree {
    return this.router.createUrlTree(['/sesion/bootstrap'], {
      queryParams: {
        redirectTo: this.resolveCleanPath(state.url)
      }
    });
  }

  private resolveCleanPath(url: string): string {
    const cleanPath = url.split('?')[0] || '/dashboard';
    return cleanPath === '/' ? '/dashboard' : cleanPath;
  }
}
