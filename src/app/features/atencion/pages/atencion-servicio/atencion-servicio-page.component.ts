import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewRef,
  ViewChild
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { NotificationService } from '../../../../core/services/notification.service';
import { StepperStep } from '../../../../shared/components/stepper-atencion/stepper-atencion.component';
import { ServicioCardView } from '../../../../shared/components/servicio-card/servicio-card.component';
import { AvisosOperativosService } from '../../../avisos-operativos/services/avisos-operativos.service';
import { CatalogosService } from '../../../catalogos/services/catalogos.service';
import { ServicioCatalogo } from '../../../catalogos/models/catalogo.model';
import { Atencion } from '../../models/atencion.model';
import { AtencionStateService } from '../../services/atencion-state.service';
import { AtencionService } from '../../services/atencion.service';

@Component({
  selector: 'app-atencion-servicio-page',
  templateUrl: './atencion-servicio-page.component.html',
  styleUrls: ['./atencion-servicio-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtencionServicioPageComponent implements OnInit, OnDestroy {
  @ViewChild('reportTitleInput')
  private reportTitleInput?: ElementRef<HTMLInputElement>;

  public readonly state$ = this.atencionStateService.state$;
  public readonly steps: StepperStep[] = [
    { label: 'Identificacion', hint: 'Busqueda del ciudadano' },
    { label: 'Datos del ciudadano', hint: 'Validacion de datos' },
    { label: 'Entidad', hint: 'Seleccion institucional' },
    { label: 'Servicio', hint: 'Tramite operativo' },
    { label: 'Finalizacion', hint: 'Cierre de atencion' }
  ];
  public servicios: ServicioCatalogo[] = [];
  public serviciosLoading = true;
  public serviciosError: string | null = null;
  public searchTerm = '';
  public selectingServicioId: number | string | null = null;
  public serviceMonitorVisible = false;
  public serviceMonitorUrl: string | null = null;
  public serviceMonitorStartedAtLabel = '';
  public serviceMonitorElapsedLabel = '00:00:00';
  public reportModalVisible = false;
  public reportingServicio: ServicioCatalogo | null = null;
  public reportSubmitting = false;
  public finalizingAttention = false;
  public startingNextAttention = false;
  public readonly reportForm = this.formBuilder.group({
    tipoFalla: ['', Validators.required],
    severidad: ['media', Validators.required],
    titulo: ['', [Validators.required, Validators.maxLength(120)]],
    descripcion: ['', [Validators.required, Validators.maxLength(500)]],
    urlReportada: ['']
  });

  private serviceTimerId: ReturnType<typeof window.setInterval> | null = null;
  private serviceStartTimeMs: number | null = null;

  public constructor(
    private readonly atencionService: AtencionService,
    private readonly atencionStateService: AtencionStateService,
    private readonly avisosOperativosService: AvisosOperativosService,
    private readonly catalogosService: CatalogosService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly formBuilder: FormBuilder,
    private readonly notificationService: NotificationService,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    const state = this.atencionStateService.snapshot;

    if (!state.atencion || !state.entidad) {
      this.notificationService.warning(
        'Entidad requerida',
        'Primero selecciona una entidad para continuar.'
      );
      void this.router.navigate(['/atencion/entidades']);
      return;
    }

    this.atencionStateService.setCurrentRoute('/atencion/servicios');
    this.restoreServiceMonitor(state.atencion);
    this.loadServicios(state.entidad.id);
  }

  public ngOnDestroy(): void {
    this.stopServiceTimer();
  }

  public get filteredServicios(): ServicioCatalogo[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.servicios;
    }

    return this.servicios.filter((servicio) =>
      [servicio.nombre, servicio.descripcion, servicio.canal]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(term))
    );
  }

  public retryServicios(): void {
    const entidadId = this.atencionStateService.snapshot.entidad?.id;

    if (entidadId !== undefined && entidadId !== null) {
      this.loadServicios(entidadId, true);
    }
  }

  public goBackToEntidades(): void {
    if (this.serviceMonitorVisible) {
      this.notificationService.warning(
        'Servicio en curso',
        'Finaliza la atencion actual antes de volver a seleccionar entidad.'
      );
      return;
    }

    this.atencionStateService.setCurrentRoute('/atencion/entidades');
    void this.router.navigate(['/atencion/entidades']);
  }

  public onSelectServicio(servicio: ServicioCatalogo): void {
    const state = this.atencionStateService.snapshot;

    if (!state.atencion) {
      return;
    }

    const pendingWindow = this.openPendingServiceTab();
    this.selectingServicioId = servicio.id;
    this.changeDetectorRef.markForCheck();

    this.atencionService
      .seleccionarServicio(state.atencion.id, {
        servicioId: servicio.id
      })
      .pipe(take(1))
      .subscribe({
        next: (atencion) => {
          this.atencionStateService.setServicioSelected(
            servicio,
            atencion,
            'Servicio seleccionado. El tramite externo quedo listo para abrirse.'
          );
          const redirectUrl = this.resolveRedirectUrl(servicio, atencion);

          if (redirectUrl) {
            console.debug('[AtencionServicioPage] Abriendo servicio', {
              servicioId: servicio.id,
              redirectUrl
            });
            this.navigatePendingServiceTab(pendingWindow, redirectUrl);
            this.openServiceMonitor(redirectUrl, atencion);
            this.notificationService.success(
              'Servicio abierto',
              'El tramite se abrio en una nueva pestana. El monitor de atencion quedo disponible en esta pantalla.'
            );
            return;
          }

          this.closePendingServiceTab(pendingWindow);
          this.notificationService.warning(
            'Servicio seleccionado sin enlace',
            'El backend no devolvio una URL de redireccion para continuar con el tramite.'
          );
        },
        error: () => {
          this.closePendingServiceTab(pendingWindow);
          this.notificationService.error(
            'No se pudo seleccionar el servicio',
            'Reintenta la operacion para continuar.'
          );
        }
      })
      .add(() => {
        this.selectingServicioId = null;
        this.changeDetectorRef.markForCheck();
      });
  }

  public finalizeAttention(): void {
    const atencion = this.atencionStateService.snapshot.atencion;

    if (!atencion || this.finalizingAttention || this.startingNextAttention) {
      return;
    }

    this.finalizingAttention = true;
    this.changeDetectorRef.markForCheck();

    this.atencionService
      .finalizar(atencion.id)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.stopServiceTimer();
          this.serviceMonitorVisible = false;
          this.atencionStateService.setServiceMonitor(null);
          this.atencionStateService.reset();
          this.notificationService.success(
            'Atencion finalizada',
            'La atencion se cerro correctamente.'
          );
          void this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.notificationService.error(
            'No se pudo finalizar la atencion',
            'Reintenta la operacion desde el monitor del servicio.'
          );
        }
      })
      .add(() => {
        this.finalizingAttention = false;
        this.changeDetectorRef.markForCheck();
      });
  }

  public startNextAttention(): void {
    const state = this.atencionStateService.snapshot;
    const atencion = state.atencion;
    const ciudadano = state.ciudadano;

    if (
      !atencion ||
      !ciudadano?.id ||
      this.finalizingAttention ||
      this.startingNextAttention
    ) {
      return;
    }

    this.startingNextAttention = true;
    this.changeDetectorRef.markForCheck();

    this.atencionService
      .finalizar(atencion.id)
      .pipe(
        switchMap(() =>
          this.atencionService.crear({
            ciudadanoId: ciudadano.id
          })
        ),
        switchMap((nuevaAtencion) => this.atencionService.iniciar(nuevaAtencion.id)),
        take(1)
      )
      .subscribe({
        next: (nuevaAtencion) => {
          this.stopServiceTimer();
          this.serviceMonitorVisible = false;
          this.atencionStateService.setServiceMonitor(null);
          this.atencionStateService.setAttentionStarted(
            nuevaAtencion,
            'Nueva atencion iniciada con el mismo ciudadano.'
          );
          this.atencionStateService.setCurrentRoute('/atencion/entidades');
          this.notificationService.success(
            'Nueva atencion iniciada',
            'Se reutilizo el ciudadano actual y la nueva atencion quedo lista para seleccionar entidad.'
          );
          void this.router.navigate(['/atencion/entidades']);
        },
        error: () => {
          this.notificationService.error(
            'No se pudo iniciar una nueva atencion',
            'La atencion actual no pudo cerrarse o la nueva atencion no pudo abrirse.'
          );
        }
      })
      .add(() => {
        this.startingNextAttention = false;
        this.changeDetectorRef.markForCheck();
      });
  }

  public mapServicioCard(servicio: ServicioCatalogo): ServicioCardView {
    return {
      nombre: servicio.nombre,
      descripcion: servicio.descripcion,
      canal: servicio.canal,
      disponibilidad: servicio.disponibilidad,
      logoUrl: servicio.logoUrl
    };
  }

  public trackByServicioId(
    index: number,
    servicio: ServicioCatalogo
  ): number | string {
    return servicio.id ?? index;
  }

  public openReportModal(servicio: ServicioCatalogo): void {
    const state = this.atencionStateService.snapshot;

    this.reportingServicio = servicio;
    this.reportModalVisible = true;
    this.reportForm.reset({
      tipoFalla: '',
      severidad: 'media',
      titulo: servicio.nombre
        ? `Incidencia en ${servicio.nombre}`
        : '',
      descripcion: '',
      urlReportada: this.serviceMonitorUrl || ''
    });

    if (!state.entidad) {
      this.notificationService.warning(
        'Entidad no disponible',
        'No se encontro la entidad seleccionada para completar el reporte.'
      );
    }

    this.changeDetectorRef.markForCheck();
    window.setTimeout(() => {
      this.reportTitleInput?.nativeElement.focus();
      this.reportTitleInput?.nativeElement.select();
    }, 0);
  }

  public closeReportModal(): void {
    if (this.reportSubmitting) {
      return;
    }

    this.reportingServicio = null;
    this.reportModalVisible = false;
    this.reportForm.reset({
      tipoFalla: '',
      severidad: 'media',
      titulo: '',
      descripcion: '',
      urlReportada: ''
    });
    this.changeDetectorRef.markForCheck();
  }

  public submitReport(): void {
    const state = this.atencionStateService.snapshot;

    if (!this.reportingServicio || !state.entidad || this.reportSubmitting) {
      return;
    }

    if (this.reportForm.invalid) {
      this.reportForm.markAllAsTouched();
      return;
    }

    this.reportSubmitting = true;
    this.changeDetectorRef.markForCheck();

    const formValue = this.reportForm.getRawValue();

    this.avisosOperativosService
      .crear({
        tipoFalla: formValue.tipoFalla?.trim() || '',
        severidad: formValue.severidad?.trim() || 'media',
        titulo: formValue.titulo?.trim() || '',
        descripcion: formValue.descripcion?.trim() || '',
        urlReportada: formValue.urlReportada?.trim() || null,
        servicioId: this.reportingServicio.id,
        entidadId: state.entidad.id
      })
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.notificationService.success(
            'Falla reportada',
            'El aviso operativo se registro correctamente.'
          );
          this.closeReportModal();
        },
        error: () => {
          this.notificationService.error(
            'No se pudo registrar la falla',
            'Revisa los datos del aviso e intenta nuevamente.'
          );
        }
      })
      .add(() => {
        this.reportSubmitting = false;
        this.changeDetectorRef.markForCheck();
      });
  }

  public resolveCitizenFullName(): string {
    const ciudadano = this.atencionStateService.snapshot.ciudadano;

    if (!ciudadano) {
      return 'Ciudadano pendiente';
    }

    return [
      ciudadano.nombres,
      ciudadano.apellidoPaterno || ciudadano.apellidos || '',
      ciudadano.apellidoMaterno || ''
    ]
      .filter(Boolean)
      .join(' ');
  }

  public resolveCitizenDocument(): string {
    const ciudadano = this.atencionStateService.snapshot.ciudadano;

    if (!ciudadano) {
      return 'Sin documento';
    }

    return ciudadano.numeroDocumento || 'Sin documento';
  }

  public resolveServiceStartLabel(): string {
    return this.serviceMonitorStartedAtLabel || 'Pendiente';
  }

  public get reportTitleControl() {
    return this.reportForm.controls.titulo;
  }

  public get reportDescriptionControl() {
    return this.reportForm.controls.descripcion;
  }

  private loadServicios(entidadId: number | string, force = false): void {
    this.serviciosLoading = true;
    this.serviciosError = null;
    this.changeDetectorRef.markForCheck();

    this.catalogosService
      .getServicios(entidadId, force)
      .pipe(
        take(1),
        catchError((error) => {
          console.error('[AtencionServicioPage] Error cargando servicios', error);
          this.serviciosLoading = false;
          this.serviciosError =
            'No se pudieron cargar los servicios de la entidad seleccionada.';
          this.changeDetectorRef.markForCheck();
          return of([]);
        })
      )
      .subscribe((servicios) => {
        this.servicios = servicios;
        this.serviciosLoading = false;
        this.changeDetectorRef.markForCheck();
      });
  }

  private openServiceMonitor(redirectUrl: string, atencion: Atencion): void {
    this.serviceMonitorUrl = redirectUrl;
    this.serviceMonitorVisible = true;
    this.serviceStartTimeMs = this.resolveServiceStartTime(atencion);
    this.serviceMonitorStartedAtLabel = this.formatDateTime(
      this.serviceStartTimeMs
    );
    this.updateElapsedTime();
    this.startServiceTimer();
    this.atencionStateService.setServiceMonitor({
      visible: true,
      url: redirectUrl,
      startedAtMs: this.serviceStartTimeMs,
      startedAtLabel: this.serviceMonitorStartedAtLabel
    });
    this.changeDetectorRef.markForCheck();
  }

  private resolveRedirectUrl(
    servicio: ServicioCatalogo,
    atencion: Atencion
  ): string | null {
    const candidates = [
      atencion.urlServicio,
      servicio.url,
      atencion.urlRetorno,
      servicio.urlRetorno
    ];

    const redirectUrl = candidates.find(
      (candidate) => typeof candidate === 'string' && candidate.trim().length > 0
    );

    return redirectUrl ? redirectUrl.trim() : null;
  }

  private openPendingServiceTab(): Window | null {
    const serviceWindow = window.open('', '_blank');

    if (!serviceWindow) {
      this.notificationService.warning(
        'Pestana bloqueada',
        'El navegador podria bloquear la apertura del servicio. Si ocurre, habilita ventanas emergentes.'
      );
      return null;
    }

    serviceWindow.document.title = 'Abriendo servicio';
    serviceWindow.document.body.innerHTML =
      '<div style="font-family: Aptos, Segoe UI, sans-serif; padding: 32px; color: #1d3553;">' +
      '<strong>Abriendo servicio institucional...</strong>' +
      '<p style="margin-top: 12px; color: #55708f;">Espera la confirmacion del backend para continuar.</p>' +
      '</div>';

    return serviceWindow;
  }

  private navigatePendingServiceTab(
    serviceWindow: Window | null,
    redirectUrl: string
  ): void {
    if (serviceWindow) {
      serviceWindow.opener = null;
      serviceWindow.location.replace(redirectUrl);
      return;
    }

    const fallbackWindow = window.open(redirectUrl, '_blank');

    if (fallbackWindow) {
      fallbackWindow.opener = null;
      return;
    }

    this.notificationService.warning(
      'Pestana bloqueada',
      'El navegador bloqueo la apertura automatica del servicio. Usa la pestana del tramite para abrirlo manualmente.'
    );
  }

  private closePendingServiceTab(serviceWindow: Window | null): void {
    if (serviceWindow && !serviceWindow.closed) {
      serviceWindow.close();
    }
  }

  private resolveServiceStartTime(atencion: Atencion): number {
    const candidates = [
      atencion.fechaSeleccionServicio,
      atencion.fechaInicioAtencion
    ];

    for (const candidate of candidates) {
      const parsedTime = this.parseBackendDate(candidate);

      if (parsedTime !== null) {
        return Math.min(parsedTime, Date.now());
      }
    }

    return Date.now();
  }

  private parseBackendDate(value: string | null | undefined): number | null {
    if (!value || typeof value !== 'string') {
      return null;
    }

    const normalizedValue = value.includes('T') ? value : value.replace(' ', 'T');
    const parsed = Date.parse(normalizedValue);

    return Number.isNaN(parsed) ? null : parsed;
  }

  private formatDateTime(timestamp: number | null): string {
    if (timestamp === null) {
      return 'Pendiente';
    }

    return new Intl.DateTimeFormat('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(timestamp);
  }

  private startServiceTimer(): void {
    this.stopServiceTimer();
    this.serviceTimerId = window.setInterval(() => {
      this.updateElapsedTime();
      const viewRef = this.changeDetectorRef as ViewRef;

      if (!viewRef.destroyed) {
        this.changeDetectorRef.detectChanges();
      }
    }, 1000);
  }

  private stopServiceTimer(): void {
    if (this.serviceTimerId) {
      window.clearInterval(this.serviceTimerId);
      this.serviceTimerId = null;
    }
  }

  private updateElapsedTime(): void {
    if (this.serviceStartTimeMs === null) {
      this.serviceMonitorElapsedLabel = '00:00:00';
      return;
    }

    const elapsedSeconds = Math.max(
      0,
      Math.floor((Date.now() - this.serviceStartTimeMs) / 1000)
    );
    const hours = Math.floor(elapsedSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((elapsedSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(elapsedSeconds % 60)
      .toString()
      .padStart(2, '0');

    this.serviceMonitorElapsedLabel = `${hours}:${minutes}:${seconds}`;
  }

  private restoreServiceMonitor(atencion: Atencion): void {
    const serviceMonitor = this.atencionStateService.snapshot.serviceMonitor;

    if (!serviceMonitor?.visible) {
      return;
    }

    this.serviceMonitorVisible = true;
    this.serviceMonitorUrl = serviceMonitor.url;
    const restoredStartTimeMs =
      serviceMonitor.startedAtMs ?? this.resolveServiceStartTime(atencion);
    this.serviceStartTimeMs =
      restoredStartTimeMs === null
        ? Date.now()
        : Math.min(restoredStartTimeMs, Date.now());
    this.serviceMonitorStartedAtLabel =
      serviceMonitor.startedAtLabel || this.formatDateTime(this.serviceStartTimeMs);
    this.updateElapsedTime();
    this.startServiceTimer();
  }
}
