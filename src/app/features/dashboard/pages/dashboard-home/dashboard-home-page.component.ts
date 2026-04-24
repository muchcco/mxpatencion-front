import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { AtencionStateService } from '../../../atencion/services/atencion-state.service';
import { SessionContextService } from '../../../../core/services/session-context.service';
import { AvisoOperativoView } from '../../../../shared/components/aviso-operativo-item/aviso-operativo-item.component';
import { AvisosOperativosService } from '../../../avisos-operativos/services/avisos-operativos.service';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHomePageComponent implements OnInit, OnDestroy {
  public readonly session$ = this.sessionContextService.state$;
  public avisos: AvisoOperativoView[] = [];
  public avisosLoading = true;
  public avisosError: string | null = null;
  public nowLabel = '';
  public pendingRoute: string | null = null;

  private clockTimerId: ReturnType<typeof window.setInterval> | null = null;

  public constructor(
    private readonly avisosOperativosService: AvisosOperativosService,
    private readonly sessionContextService: SessionContextService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly atencionStateService: AtencionStateService,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    const resumeRoute = this.atencionStateService.resumeRoute;

    this.pendingRoute =
      resumeRoute && resumeRoute !== '/dashboard' ? resumeRoute : null;

    this.refreshNowLabel();
    this.startClock();
    this.loadAvisosRecientes();
  }

  public ngOnDestroy(): void {
    this.stopClock();
  }

  public get hasPendingAttention(): boolean {
    return Boolean(this.pendingRoute);
  }

  public get totalAvisos(): number {
    return this.avisos.length;
  }

  public get highSeverityCount(): number {
    return this.avisos.filter((aviso) => aviso.severidad === 'alta').length;
  }

  public get mediumSeverityCount(): number {
    return this.avisos.filter((aviso) => aviso.severidad === 'media').length;
  }

  public get lowSeverityCount(): number {
    return this.avisos.filter((aviso) => aviso.severidad === 'baja').length;
  }

  public startAttentionFlow(): void {
    const route = this.pendingRoute || '/atencion';
    void this.router.navigateByUrl(route);
  }

  public goToAvisos(): void {
    void this.router.navigate(['/avisos-operativos']);
  }

  public retryAvisos(): void {
    this.loadAvisosRecientes(true);
  }

  private loadAvisosRecientes(force = false): void {
    this.avisosLoading = true;
    this.avisosError = null;
    this.changeDetectorRef.markForCheck();

    this.avisosOperativosService
      .listarRecientes(4, force)
      .pipe(
        take(1),
        catchError((error) => {
          console.error(
            '[DashboardHomePage] Error cargando avisos operativos',
            error
          );
          this.avisosLoading = false;
          this.avisosError =
            'No se pudieron cargar los avisos operativos recientes.';
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

  private refreshNowLabel(): void {
    this.nowLabel = new Intl.DateTimeFormat('es-PE', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date());
    this.changeDetectorRef.markForCheck();
  }

  private startClock(): void {
    this.stopClock();
    this.clockTimerId = window.setInterval(() => {
      this.refreshNowLabel();
    }, 60000);
  }

  private stopClock(): void {
    if (this.clockTimerId) {
      window.clearInterval(this.clockTimerId);
      this.clockTimerId = null;
    }
  }
}
