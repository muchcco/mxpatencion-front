import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Asesor } from '../../../core/models/asesor.model';
import { SessionStatus } from '../../../core/models/session-context.model';

@Component({
  selector: 'app-advisor-summary',
  templateUrl: './advisor-summary.component.html',
  styleUrls: ['./advisor-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvisorSummaryComponent {
  @Input() public asesor: Asesor | null = null;
  @Input() public status: SessionStatus = 'idle';

  public resolveStatusLabel(): string {
    switch (this.status) {
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

  public resolveStatusTone():
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info' {
    switch (this.status) {
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
}
