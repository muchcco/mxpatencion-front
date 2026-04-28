import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
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
export class EntidadCardComponent implements OnChanges {
  @Input() public entidad: EntidadCardView | null = null;
  @Input() public actionLabel = 'Seleccionar entidad';

  @Output() public selected = new EventEmitter<void>();
  public logoLoadFailed = false;

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

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['entidad']) {
      this.logoLoadFailed = false;
    }
  }

  public resolveLogoSrc(): string | null {
    if (this.logoLoadFailed) {
      return null;
    }

    const rawUrl = this.entidad?.logoUrl?.trim();
    return rawUrl || null;
  }

  public onLogoError(): void {
    this.logoLoadFailed = true;
  }
}
