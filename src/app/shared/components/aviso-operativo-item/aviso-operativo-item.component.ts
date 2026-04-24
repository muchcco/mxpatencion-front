import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface AvisoOperativoView {
  id?: number | string;
  titulo: string;
  descripcion: string;
  severidad?: 'alta' | 'media' | 'baja' | null;
  entidad?: string | null;
  servicio?: string | null;
  fecha?: string | null;
}

@Component({
  selector: 'app-aviso-operativo-item',
  templateUrl: './aviso-operativo-item.component.html',
  styleUrls: ['./aviso-operativo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvisoOperativoItemComponent {
  @Input() public aviso!: AvisoOperativoView;

  public resolveSeverityTone():
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info' {
    switch (this.aviso?.severidad) {
      case 'alta':
        return 'danger';
      case 'media':
        return 'warning';
      case 'baja':
        return 'info';
      default:
        return 'default';
    }
  }

  public resolveSeverityLabel(): string {
    return (this.aviso?.severidad || 'informativo').toUpperCase();
  }

  public resolveSeverityClass(): string {
    switch (this.aviso?.severidad) {
      case 'alta':
        return 'aviso-item--alta';
      case 'media':
        return 'aviso-item--media';
      case 'baja':
        return 'aviso-item--baja';
      default:
        return 'aviso-item--default';
    }
  }

  public formatFecha(fecha: string | null | undefined): string {
    if (!fecha) {
      return 'Reciente';
    }

    const parsedDate = new Date(fecha);

    if (Number.isNaN(parsedDate.getTime())) {
      return fecha;
    }

    return parsedDate.toLocaleString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
