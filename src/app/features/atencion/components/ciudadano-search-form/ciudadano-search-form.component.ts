import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StatusBadgeTone } from '../../../../shared/ui/status-badge/status-badge.component';
import { TipoDocumento } from '../../../catalogos/models/catalogo.model';
import { BuscarCiudadanoPayload } from '../../models/ciudadano.model';
import { CiudadanoLookupStatus } from '../../services/atencion-state.service';

@Component({
  selector: 'app-ciudadano-search-form',
  templateUrl: './ciudadano-search-form.component.html',
  styleUrls: ['./ciudadano-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CiudadanoSearchFormComponent {
  @Input() public tiposDocumento: TipoDocumento[] = [];
  @Input() public status: CiudadanoLookupStatus = 'idle';
  @Input() public activeStage: 'LOCAL' | 'PIDE' | 'MANUAL' | null = null;

  @Output() public searchSubmitted =
    new EventEmitter<BuscarCiudadanoPayload>();
  @Output() public clearRequested = new EventEmitter<void>();

  public readonly searchForm = this.formBuilder.group({
    tipoDocumentoId: [null as number | null, Validators.required],
    numeroDocumento: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(15)]
    ]
  });

  public constructor(private readonly formBuilder: FormBuilder) {}

  public get busy(): boolean {
    return [
      'searching-local',
      'searching-pide',
      'saving-manual',
      'starting-attention'
    ].includes(this.status);
  }

  public submitSearch(): void {
    const tipoDocumentoId = this.resolveTipoDocumentoId();
    const numeroDocumento =
      this.searchForm.controls.numeroDocumento.value?.trim() || '';

    if (!tipoDocumentoId) {
      this.searchForm.controls.tipoDocumentoId.setErrors({ required: true });
    }

    if (this.searchForm.invalid || !tipoDocumentoId || !numeroDocumento) {
      this.searchForm.markAllAsTouched();
      return;
    }

    console.debug('[CiudadanoSearchForm] Tipo de documento seleccionado', {
      tipoDocumentoId
    });

    const payload: BuscarCiudadanoPayload = {
      tipoDocumentoId,
      numeroDocumento
    };

    console.debug('[CiudadanoSearchForm] Payload emitido', payload);
    this.searchSubmitted.emit(payload);
  }

  public clear(): void {
    this.searchForm.reset({
      tipoDocumentoId: null,
      numeroDocumento: ''
    });
    this.clearRequested.emit();
  }

  public resolveStatusLabel(): string {
    switch (this.status) {
      case 'searching-local':
        return 'Base local';
      case 'searching-pide':
        return 'PIDE';
      case 'manual':
      case 'saving-manual':
        return 'Manual';
      case 'starting-attention':
        return 'Iniciando atencion';
      default:
        return 'Listo';
    }
  }

  public resolveStatusTone(): StatusBadgeTone {
    if (this.activeStage === 'MANUAL') {
      return 'warning';
    }

    return this.busy ? 'info' : 'default';
  }

  public resolveStageTone(
    stage: 'LOCAL' | 'PIDE' | 'MANUAL'
  ): StatusBadgeTone {
    if (this.activeStage !== stage) {
      return 'default';
    }

    return stage === 'MANUAL' ? 'warning' : 'info';
  }

  public shouldShowActivityLabel(): boolean {
    return this.status !== 'idle' && this.status !== 'found';
  }

  public trackByTipoDocumento(index: number, item: TipoDocumento): number {
    return item.id_tipo_documento ?? index;
  }

  private resolveTipoDocumentoId(): number | null {
    const rawValue = this.searchForm.controls.tipoDocumentoId.value;

    if (rawValue === null || rawValue === undefined) {
      return null;
    }

    const parsedValue = Number(rawValue);
    return Number.isFinite(parsedValue) ? parsedValue : null;
  }
}
