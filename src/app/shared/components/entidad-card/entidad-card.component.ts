import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

export interface EntidadCardView {
  codigo?: string | null;
  nombre: string;
  alcance?: string | null;
  region?: string | null;
  descripcion?: string | null;
  logoUrl?: string | null;
}

@Component({
  selector: 'app-entidad-card',
  templateUrl: './entidad-card.component.html',
  styleUrls: ['./entidad-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntidadCardComponent {
  @Input() public entidad: EntidadCardView | null = null;
  @Input() public actionLabel = 'Seleccionar entidad';

  @Output() public selected = new EventEmitter<void>();

  public resolveInitials(nombre?: string | null): string {
    if (!nombre) {
      return 'EN';
    }

    return nombre
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((segment) => segment.charAt(0).toUpperCase())
      .join('');
  }
}
