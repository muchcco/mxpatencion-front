import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';
import { AuthSessionService } from '../../../features/auth-session/services/auth-session.service';
import { Asesor } from '../../../core/models/asesor.model';
import { SessionStatus } from '../../../core/models/session-context.model';
import { RoleAccessService } from '../../../core/services/role-access.service';
import { SessionContextService } from '../../../core/services/session-context.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent {
  public readonly session$ = this.sessionContextService.state$;
  public loggingOut = false;

  public constructor(
    private readonly authSessionService: AuthSessionService,
    private readonly router: Router,
    private readonly roleAccessService: RoleAccessService,
    private readonly sessionContextService: SessionContextService
  ) {}

  public resolveInitials(fullName?: string | null): string {
    if (!fullName) {
      return 'AX';
    }

    return fullName
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  }

  public resolveStatusLabel(status: SessionStatus): string {
    switch (status) {
      case 'authenticated':
        return 'Sesion activa';
      case 'loading':
        return 'Validando';
      case 'error':
        return 'Con incidencia';
      case 'anonymous':
        return 'Sin sesion';
      default:
        return 'Pendiente';
    }
  }

  public resolveStatusTone(
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

  public canAccessAdmin(asesor?: Asesor | null): boolean {
    return this.roleAccessService.canAccessAdmin(asesor);
  }

  public logout(): void {
    if (this.loggingOut) {
      return;
    }

    this.loggingOut = true;

    this.authSessionService
      .logout()
      .pipe(
        take(1),
        finalize(() => {
          this.loggingOut = false;
        })
      )
      .subscribe({
        next: () => {
          void this.router.navigate(['/sesion/bootstrap']);
        },
        error: () => {
          void this.router.navigate(['/sesion/bootstrap']);
        }
      });
  }
}
