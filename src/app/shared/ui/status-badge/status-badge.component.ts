import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type StatusBadgeTone = 'default' | 'success' | 'warning' | 'danger' | 'info';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBadgeComponent {
  @Input() public label = 'Pendiente';
  @Input() public tone: StatusBadgeTone = 'default';
}
