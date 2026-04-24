import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { NotificationService } from '../../../../core/services/notification.service';
import { TipoDocumento } from '../../../catalogos/models/catalogo.model';
import { CatalogosService } from '../../../catalogos/services/catalogos.service';
import { AvisosOperativosService } from '../../../avisos-operativos/services/avisos-operativos.service';
import { AvisoOperativoView } from '../../../../shared/components/aviso-operativo-item/aviso-operativo-item.component';
import { StepperStep } from '../../../../shared/components/stepper-atencion/stepper-atencion.component';
import { AtencionService } from '../../services/atencion.service';
import {
  AtencionState,
  AtencionStateService,
  CiudadanoLookupStatus
} from '../../services/atencion-state.service';
import { CiudadanosService } from '../../services/ciudadanos.service';
import {
  BuscarCiudadanoPayload,
  Ciudadano,
  RegistrarCiudadanoManualPayload
} from '../../models/ciudadano.model';

@Component({
  selector: 'app-atencion-home-page',
  templateUrl: './atencion-home-page.component.html',
  styleUrls: ['./atencion-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtencionHomePageComponent implements OnInit {
  public readonly state$ = this.atencionStateService.state$;
  public readonly steps: StepperStep[] = [
    { label: 'Identificacion', hint: 'Busqueda del ciudadano' },
    { label: 'Datos del ciudadano', hint: 'Validacion de datos' },
    { label: 'Entidad', hint: 'Seleccion institucional' },
    { label: 'Servicio', hint: 'Tramite operativo' },
    { label: 'Finalizacion', hint: 'Cierre de atencion' }
  ];
  public readonly sexoOptions = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Femenino' }
  ];
  public readonly manualForm = this.formBuilder.group({
    nombres: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno: ['', Validators.required],
    sexo: [null as string | null, Validators.required]
  });

  public avisos: AvisoOperativoView[] = [];
  public tiposDocumento: TipoDocumento[] = [];
  public tiposDocumentoLoading = true;
  public tiposDocumentoError: string | null = null;
  public avisosLoading = true;
  public avisosError: string | null = null;

  private searchPayload: BuscarCiudadanoPayload | null = null;

  public constructor(
    private readonly atencionService: AtencionService,
    private readonly atencionStateService: AtencionStateService,
    private readonly avisosOperativosService: AvisosOperativosService,
    private readonly catalogosService: CatalogosService,
    private readonly ciudadanosService: CiudadanosService,
    private readonly formBuilder: FormBuilder,
    private readonly notificationService: NotificationService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.atencionStateService.setCurrentRoute('/atencion');
    this.loadTiposDocumento();
    this.loadAvisosRecientes();
  }

  public retryTiposDocumento(): void {
    this.loadTiposDocumento(true);
  }

  public onSearchSubmitted(payload: BuscarCiudadanoPayload): void {
    this.searchPayload = payload;
    this.manualForm.reset({
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      sexo: null
    });

    this.atencionStateService.startLookup(
      'searching-local',
      'Buscando al ciudadano en la base local...'
    );

    this.ciudadanosService.buscar(payload).pipe(take(1)).subscribe({
      next: (result) => {
        if (result.ciudadano) {
          this.atencionStateService.setFound(
            this.enrichCiudadano(result.ciudadano, 'LOCAL'),
            result.message || 'Ciudadano encontrado en la base local.'
          );
          return;
        }

        if (result.nextAction === 'ENABLE_MANUAL') {
          this.atencionStateService.enableManual(
            result.message ||
              'No se pudo obtener la informacion desde PIDE. Complete el registro manual.'
          );
          return;
        }

        this.consultarPide(payload, result.message);
      },
      error: () => {
        this.atencionStateService.setError(
          'No fue posible consultar la base local. Verifica la conectividad e intenta nuevamente.'
        );
      }
    });
  }

  public onSaveManual(): void {
    if (!this.searchPayload) {
      this.notificationService.warning(
        'Busqueda requerida',
        'Primero realiza la busqueda del ciudadano para completar el registro manual.'
      );
      return;
    }

    if (this.manualForm.invalid) {
      this.manualForm.markAllAsTouched();
      return;
    }

    const payload: RegistrarCiudadanoManualPayload = {
      ...this.searchPayload,
      nombres: this.manualForm.controls.nombres.value?.trim() || '',
      apellidoPaterno:
        this.manualForm.controls.apellidoPaterno.value?.trim() || '',
      apellidoMaterno:
        this.manualForm.controls.apellidoMaterno.value?.trim() || '',
      sexo: this.manualForm.controls.sexo.value || ''
    };

    this.atencionStateService.setStatus(
      'saving-manual',
      'Guardando el registro manual del ciudadano...'
    );

    this.ciudadanosService.registrarManual(payload).pipe(take(1)).subscribe({
      next: (ciudadano) => {
        this.atencionStateService.setFound(
          this.enrichCiudadano(ciudadano, 'MANUAL'),
          'Ciudadano registrado manualmente.'
        );
        this.notificationService.success(
          'Registro manual completado',
          'El ciudadano ya puede iniciar su atencion.'
        );
      },
      error: () => {
        this.atencionStateService.enableManual(
          'No fue posible guardar el registro manual. Revisa los datos e intenta nuevamente.'
        );
      }
    });
  }

  public onStartAttention(): void {
    const ciudadano = this.atencionStateService.snapshot.ciudadano;

    if (!ciudadano) {
      return;
    }

    this.atencionStateService.setStatus(
      'starting-attention',
      'Registrando la atencion para continuar con la seleccion de entidad.'
    );

    this.atencionService
      .crear({
        ciudadanoId: ciudadano.id ?? null
      })
      .pipe(
        switchMap((atencion) => this.atencionService.iniciar(atencion.id)),
        take(1)
      )
      .subscribe({
        next: (atencion) => {
          this.atencionStateService.setAttentionStarted(
            atencion,
            'Atencion iniciada. La siguiente fase continuara con la seleccion de entidad.'
          );
          this.atencionStateService.setCurrentRoute('/atencion/entidades');
          this.notificationService.success(
            'Atencion iniciada',
            `Atencion #${atencion.id} lista para continuar.`
          );
          void this.router.navigate(['/atencion/entidades']);
        },
        error: () => {
          this.atencionStateService.setError(
            'No fue posible iniciar la atencion. Puedes intentarlo nuevamente.'
          );
        }
      });
  }

  public onClearRequested(): void {
    this.searchPayload = null;
    this.manualForm.reset({
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      sexo: null
    });
    this.atencionStateService.reset();
  }

  public onEditCitizen(): void {
    this.notificationService.info(
      'Edicion en siguiente fase',
      'La edicion de datos del ciudadano se habilitara en el siguiente paso del flujo.'
    );
  }

  public resolveCurrentStep(status: CiudadanoLookupStatus): number {
    return status === 'attention-started' ? 1 : 0;
  }

  public resolveActiveStage(
    state: AtencionState
  ): 'LOCAL' | 'PIDE' | 'MANUAL' | null {
    if (state.status === 'searching-local') {
      return 'LOCAL';
    }

    if (state.status === 'searching-pide') {
      return 'PIDE';
    }

    if (state.status === 'manual' || state.status === 'saving-manual') {
      return 'MANUAL';
    }

    switch (state.ciudadano?.fuente) {
      case 'LOCAL':
        return 'LOCAL';
      case 'PIDE':
        return 'PIDE';
      case 'MANUAL':
        return 'MANUAL';
      default:
        return null;
    }
  }

  public shouldShowManualForm(state: AtencionState): boolean {
    return state.status === 'manual' || state.status === 'saving-manual';
  }

  public shouldShowCitizenCard(state: AtencionState): boolean {
    return !!state.ciudadano;
  }

  public shouldShowLookupProgress(state: AtencionState): boolean {
    return (
      state.status === 'searching-local' || state.status === 'searching-pide'
    );
  }

  public shouldShowError(state: AtencionState): boolean {
    return state.status === 'error';
  }

  public canStartAttention(state: AtencionState): boolean {
    return !!state.ciudadano && state.status !== 'starting-attention';
  }

  public mapCiudadanoCard(ciudadano: Ciudadano | null) {
    if (!ciudadano) {
      return null;
    }

    return {
      nombres: ciudadano.nombres,
      apellidoPaterno: ciudadano.apellidoPaterno,
      apellidoMaterno: ciudadano.apellidoMaterno,
      apellidos: ciudadano.apellidos,
      documento: ciudadano.numeroDocumento,
      tipoDocumento: this.resolveTipoDocumentoLabel(ciudadano),
      sexo: this.resolveSexoLabel(ciudadano.sexo),
      direccion: ciudadano.direccion,
      fotoUrl: ciudadano.fotoUrl,
      fuente: this.resolveFuenteLabel(ciudadano.fuente)
    };
  }

  public resolveResultTone(
    state: AtencionState
  ): 'default' | 'success' | 'warning' | 'danger' | 'info' {
    if (state.status === 'manual' || state.status === 'saving-manual') {
      return 'warning';
    }

    if (state.status === 'error') {
      return 'danger';
    }

    if (state.status === 'searching-local' || state.status === 'searching-pide') {
      return 'info';
    }

    if (state.ciudadano) {
      return 'success';
    }

    return 'default';
  }

  public resolveResultBadgeLabel(state: AtencionState): string {
    if (state.status === 'searching-local') {
      return 'Base local';
    }

    if (state.status === 'searching-pide') {
      return 'PIDE';
    }

    if (state.status === 'manual' || state.status === 'saving-manual') {
      return 'Manual';
    }

    return this.resolveFuenteLabel(state.ciudadano?.fuente) || 'Pendiente';
  }

  public resolveNoticeTitle(state: AtencionState): string {
    switch (state.status) {
      case 'searching-local':
        return 'Buscando en base local';
      case 'searching-pide':
        return 'Consultando PIDE...';
      case 'manual':
      case 'saving-manual':
        return 'Registro manual habilitado';
      case 'error':
        return 'No fue posible completar la busqueda';
      default:
        return 'Listo para identificar al ciudadano';
    }
  }

  public resolveOriginLabel(state: AtencionState): string | null {
    if (!state.ciudadano) {
      return null;
    }

    const fuente = state.ciudadano.fuente;

    if (fuente === 'LOCAL') {
      return 'Origen: Base de datos local';
    }

    if (fuente === 'PIDE') {
      return 'Origen: Consulta PIDE';
    }

    if (fuente === 'MANUAL') {
      return 'Origen: Registro manual';
    }

    return 'Origen: Datos de ciudadano';
  }

  public resolveOriginDetail(state: AtencionState): string | null {
    if (!state.ciudadano) {
      return null;
    }

    if (state.status === 'attention-started' && state.atencion) {
      return `Atencion #${state.atencion.id} lista para continuar con entidad y servicio.`;
    }

    return 'Registro disponible para iniciar la atencion.';
  }

  private consultarPide(
    payload: BuscarCiudadanoPayload,
    localMessage?: string
  ): void {
    this.atencionStateService.startLookup(
      'searching-pide',
      localMessage || 'No se encontro localmente. Consultando PIDE...'
    );

    this.ciudadanosService.consultarPide(payload).pipe(take(1)).subscribe({
      next: (result) => {
        if (result.ciudadano) {
          this.atencionStateService.setFound(
            this.enrichCiudadano(result.ciudadano, 'PIDE'),
            result.message || 'Ciudadano encontrado en PIDE.'
          );
          return;
        }

        this.atencionStateService.enableManual(
          result.message ||
            'No se pudo obtener la informacion desde PIDE. Complete el registro manual.'
        );
      },
      error: () => {
        this.atencionStateService.enableManual(
          'No se pudo obtener la informacion desde PIDE. Complete el registro manual.'
        );
      }
    });
  }

  private loadTiposDocumento(force = false): void {
    this.tiposDocumentoLoading = true;
    this.tiposDocumentoError = null;
    this.changeDetectorRef.markForCheck();

    this.catalogosService
      .getTiposDocumento(force)
      .pipe(
        take(1),
        catchError((error) => {
          console.error('[AtencionHomePage] Error cargando tipos de documento', error);
          this.tiposDocumentoError =
            'No se pudo cargar el catalogo de tipos de documento.';
          this.tiposDocumentoLoading = false;
          this.changeDetectorRef.markForCheck();
          return of([]);
        })
      )
      .subscribe((tiposDocumento) => {
        this.tiposDocumento = tiposDocumento;
        this.tiposDocumentoLoading = false;
        this.changeDetectorRef.markForCheck();
      });
  }

  private loadAvisosRecientes(): void {
    this.avisosLoading = true;
    this.avisosError = null;
    this.changeDetectorRef.markForCheck();

    this.avisosOperativosService
      .listarRecientes(4)
      .pipe(
        take(1),
        catchError((error) => {
          console.error('[AtencionHomePage] Error cargando avisos recientes', error);
          this.avisosError =
            'No se pudieron cargar los avisos operativos recientes.';
          this.avisosLoading = false;
          this.changeDetectorRef.markForCheck();
          return of([]);
        })
      )
      .subscribe((avisos) => {
        this.avisosLoading = false;
        this.avisos = avisos.map((aviso) => ({
          id: aviso.id,
          titulo: aviso.titulo,
          descripcion: aviso.descripcion,
          severidad:
            aviso.severidad === 'alta' ||
            aviso.severidad === 'media' ||
            aviso.severidad === 'baja'
              ? aviso.severidad
              : 'media',
          entidad: aviso.entidadNombre,
          servicio: aviso.servicioNombre,
          fecha: aviso.createdAt
        }));
        this.changeDetectorRef.markForCheck();
      });
  }

  private enrichCiudadano(
    ciudadano: Ciudadano,
    fuente: 'LOCAL' | 'PIDE' | 'MANUAL'
  ): Ciudadano {
    return {
      ...ciudadano,
      fuente: ciudadano.fuente || fuente
    };
  }

  private resolveFuenteLabel(fuente: string | null | undefined): string {
    switch (fuente) {
      case 'LOCAL':
        return 'Base local';
      case 'PIDE':
        return 'PIDE';
      case 'MANUAL':
        return 'Manual';
      default:
        return fuente || 'Pendiente';
    }
  }

  private resolveTipoDocumentoLabel(
    ciudadano: Ciudadano
  ): string | null {
    const tipoDocumento = ciudadano.tipoDocumento?.trim();

    if (tipoDocumento) {
      return tipoDocumento;
    }

    const tipoDocumentoId = ciudadano.tipoDocumentoId;

    if (tipoDocumentoId === null || tipoDocumentoId === undefined) {
      return null;
    }

    const match = this.tiposDocumento.find(
      (tipo) => Number(tipo.id_tipo_documento) === Number(tipoDocumentoId)
    );

    return match?.nombre || null;
  }

  private resolveSexoLabel(sexo: string | null | undefined): string | null {
    if (!sexo) {
      return null;
    }

    if (sexo === 'M') {
      return 'Masculino';
    }

    if (sexo === 'F') {
      return 'Femenino';
    }

    return sexo;
  }
}
