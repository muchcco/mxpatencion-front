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
import { TabLockService } from '../services/tab-lock.service';

@Injectable({
  providedIn: 'root'
})
export class TabLockGuard implements CanActivate, CanActivateChild {
  public constructor(
    private readonly router: Router,
    private readonly tabLockService: TabLockService
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.resolveAccess(state);
  }

  public canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.resolveAccess(state);
  }

  private resolveAccess(state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    this.tabLockService.initialize();

    if (this.tabLockService.canUseApp) {
      return of(true);
    }

    return of(
      this.router.createUrlTree(['/sesion/bloqueada'], {
        queryParams: {
          reason: this.tabLockService.snapshot.reason || 'active-tab',
          redirectTo: this.resolveCleanPath(state.url)
        }
      })
    );
  }

  private resolveCleanPath(url: string): string {
    const cleanPath = url.split('?')[0] || '/dashboard';
    return cleanPath === '/' ? '/dashboard' : cleanPath;
  }
}
