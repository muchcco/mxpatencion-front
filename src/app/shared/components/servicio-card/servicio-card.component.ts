import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

export interface ServicioCardView {
  nombre: string;
  descripcion?: string | null;
  canal?: string | null;
  disponibilidad?: string | null;
  logoUrl?: string | null;
}

@Component({
  selector: 'app-servicio-card',
  templateUrl: './servicio-card.component.html',
  styleUrls: ['./servicio-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicioCardComponent {
  @Input() public servicio: ServicioCardView | null = null;
  @Input() public actionLabel = 'Seleccionar servicio';
  @Input() public secondaryLabel = 'Reportar falla';

  @Output() public selected = new EventEmitter<void>();
  @Output() public secondaryAction = new EventEmitter<void>();
}
