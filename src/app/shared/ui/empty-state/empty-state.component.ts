import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyStateComponent {
  @Input() public title = 'Sin informacion disponible';
  @Input() public description =
    'No hay datos para mostrar por el momento.';
  @Input() public actionLabel?: string;
  @Input() public compact = false;

  @Output() public action = new EventEmitter<void>();
}
