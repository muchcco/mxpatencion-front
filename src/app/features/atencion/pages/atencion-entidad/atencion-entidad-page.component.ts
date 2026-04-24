import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { NotificationService } from '../../../../core/services/notification.service';
import { StepperStep } from '../../../../shared/components/stepper-atencion/stepper-atencion.component';
import { EntidadCardView } from '../../../../shared/components/entidad-card/entidad-card.component';
import { EntidadVisible } from '../../../catalogos/models/catalogo.model';
import { CatalogosService } from '../../../catalogos/services/catalogos.service';
import { AtencionStateService } from '../../services/atencion-state.service';
import { AtencionService } from '../../services/atencion.service';

@Component({
  selector: 'app-atencion-entidad-page',
  templateUrl: './atencion-entidad-page.component.html',
  styleUrls: ['./atencion-entidad-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtencionEntidadPageComponent implements OnInit {
  public readonly state$ = this.atencionStateService.state$;
  public readonly steps: StepperStep[] = [
    { label: 'Identificacion', hint: 'Busqueda del ciudadano' },
    { label: 'Datos del ciudadano', hint: 'Validacion de datos' },
    { label: 'Entidad', hint: 'Seleccion institucional' },
    { label: 'Servicio', hint: 'Tramite operativo' },
    { label: 'Finalizacion', hint: 'Cierre de atencion' }
  ];
  public entidades: EntidadVisible[] = [];
  public entidadesLoading = true;
  public entidadesError: string | null = null;
  public readonly pageSizeOptions = [6, 9];
  public pageSize = 9;
  public currentPage = 1;
  public selectingEntidadId: number | string | null = null;
  private searchTermValue = '';

  public constructor(
    private readonly atencionService: AtencionService,
    private readonly atencionStateService: AtencionStateService,
    private readonly catalogosService: CatalogosService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly notificationService: NotificationService,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    const state = this.atencionStateService.snapshot;

    if (!state.ciudadano || !state.atencion) {
      this.notificationService.warning(
        'Atencion no disponible',
        'Primero identifica al ciudadano e inicia la atencion.'
      );
      void this.router.navigate(['/atencion']);
      return;
    }

    this.atencionStateService.setCurrentRoute('/atencion/entidades');
    this.loadEntidades();
  }

  public get searchTerm(): string {
    return this.searchTermValue;
  }

  public set searchTerm(value: string) {
    this.searchTermValue = value ?? '';
    this.currentPage = 1;
  }

  public get filteredEntidades(): EntidadVisible[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.entidades;
    }

    return this.entidades.filter((entidad) =>
      [
        entidad.codigo,
        entidad.nombre,
        entidad.alcance,
        entidad.region,
        entidad.descripcion
      ]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(term))
    );
  }

  public get pagedEntidades(): EntidadVisible[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredEntidades.slice(start, end);
  }

  public get totalPages(): number {
    const pages = Math.ceil(this.filteredEntidades.length / this.pageSize);
    return Math.max(1, pages);
  }

  public get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  public retryEntidades(): void {
    this.loadEntidades(true);
  }

  public onPageSizeChange(value: number | string): void {
    const parsedSize = Number(value);

    if (!this.pageSizeOptions.includes(parsedSize)) {
      return;
    }

    this.pageSize = parsedSize;
    this.currentPage = 1;
  }

  public goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
  }

  public nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  public previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  public onSelectEntidad(entidad: EntidadVisible): void {
    const state = this.atencionStateService.snapshot;

    if (!state.atencion) {
      return;
    }

    this.selectingEntidadId = entidad.id;
    this.changeDetectorRef.markForCheck();

    this.atencionService
      .seleccionarEntidad(state.atencion.id, {
        entidadId: entidad.id
      })
      .pipe(take(1))
      .subscribe({
        next: (atencion) => {
          this.atencionStateService.setEntidadSelected(
            entidad,
            atencion,
            'Entidad seleccionada. Continua con la eleccion del servicio.'
          );
          this.atencionStateService.setCurrentRoute('/atencion/servicios');
          this.notificationService.success(
            'Entidad seleccionada',
            `${entidad.nombre} quedo lista para el siguiente paso.`
          );
          void this.router.navigate(['/atencion/servicios']);
        },
        error: () => {
          this.notificationService.error(
            'No se pudo seleccionar la entidad',
            'Reintenta la operacion para continuar.'
          );
        }
      })
      .add(() => {
        this.selectingEntidadId = null;
        this.changeDetectorRef.markForCheck();
      });
  }

  public mapEntidadCard(entidad: EntidadVisible): EntidadCardView {
    return {
      codigo: entidad.codigo,
      nombre: entidad.nombre,
      alcance: entidad.alcance,
      region: entidad.region,
      descripcion: entidad.descripcion,
      logoUrl: entidad.logoUrl
    };
  }

  public trackByEntidadId(
    index: number,
    entidad: EntidadVisible
  ): number | string {
    return entidad.id ?? index;
  }

  private loadEntidades(force = false): void {
    this.entidadesLoading = true;
    this.entidadesError = null;
    this.changeDetectorRef.markForCheck();

    this.catalogosService
      .getEntidadesVisibles(force)
      .pipe(
        take(1),
        catchError((error) => {
          console.error('[AtencionEntidadPage] Error cargando entidades', error);
          this.entidadesLoading = false;
          this.entidadesError =
            'No se pudieron cargar las entidades visibles para esta atencion.';
          this.changeDetectorRef.markForCheck();
          return of([]);
        })
      )
      .subscribe((entidades) => {
        this.entidades = entidades;
        this.currentPage = 1;
        this.entidadesLoading = false;
        this.changeDetectorRef.markForCheck();
      });
  }
}
