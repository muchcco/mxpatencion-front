import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

export interface CiudadanoCardView {
  nombres: string;
  apellidoPaterno?: string | null;
  apellidoMaterno?: string | null;
  apellidos?: string | null;
  documento?: string | null;
  tipoDocumento?: string | null;
  sexo?: string | null;
  direccion?: string | null;
  fotoUrl?: string | null;
  fuente?: string | null;
}

@Component({
  selector: 'app-ciudadano-card',
  templateUrl: './ciudadano-card.component.html',
  styleUrls: ['./ciudadano-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CiudadanoCardComponent {
  @Input() public ciudadano: CiudadanoCardView | null = null;
  @Input() public showActions = false;
  @Input() public primaryLabel = 'Iniciar atencion';
  @Input() public secondaryLabel = 'Editar datos';
  @Input() public primaryDisabled = false;
  @Input() public originLabel: string | null = null;
  @Input() public originDetail: string | null = null;

  @Output() public primaryAction = new EventEmitter<void>();
  @Output() public secondaryAction = new EventEmitter<void>();

  public resolveFuenteTone():
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info' {
    const fuente = this.ciudadano?.fuente?.toUpperCase() || '';

    if (fuente.includes('LOCAL')) {
      return 'success';
    }

    if (fuente.includes('PIDE')) {
      return 'info';
    }

    if (fuente.includes('MANUAL')) {
      return 'warning';
    }

    return 'default';
  }

  public resolveInitials(): string {
    const ciudadano = this.ciudadano;

    if (!ciudadano) {
      return 'CI';
    }

    const source = `${ciudadano.nombres} ${ciudadano.apellidoPaterno || ciudadano.apellidos || ''}`.trim();
    const parts = source.split(/\s+/).filter(Boolean);

    return parts
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  }

  public resolveFullName(): string {
    if (!this.ciudadano) {
      return 'Ciudadano pendiente';
    }

    return [
      this.ciudadano.nombres,
      this.ciudadano.apellidoPaterno || this.ciudadano.apellidos || '',
      this.ciudadano.apellidoMaterno || ''
    ]
      .filter(Boolean)
      .join(' ');
  }

  public resolveHeadline(): string {
    const fuente = this.ciudadano?.fuente?.toUpperCase() || '';

    if (fuente.includes('LOCAL')) {
      return 'Ciudadano encontrado en base local';
    }

    if (fuente.includes('PIDE')) {
      return 'Ciudadano encontrado en PIDE';
    }

    if (fuente.includes('MANUAL')) {
      return 'Ciudadano registrado manualmente';
    }

    return 'Ciudadano identificado';
  }
}
