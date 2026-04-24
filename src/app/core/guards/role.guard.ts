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
import { NotificationService } from '../services/notification.service';
import { RoleAccessService } from '../services/role-access.service';
import { SessionContextService } from '../services/session-context.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild {
  public constructor(
    private readonly notificationService: NotificationService,
    private readonly roleAccessService: RoleAccessService,
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
    const expectedRoles = (route.data['roles'] as string[] | undefined) || [];
    const asesor = this.sessionContextService.snapshot.asesor;

    if (
      expectedRoles.length === 0 ||
      this.roleAccessService.hasAnyRole(asesor, expectedRoles)
    ) {
      return of(true);
    }

    this.notificationService.warning(
      'Acceso restringido',
      'Tu perfil no tiene permisos para ingresar a este modulo.'
    );

    return of(this.router.createUrlTree(['/dashboard'], {
      queryParams: {
        deniedFrom: state.url
      }
    }));
  }
}
