import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AdvisorSummaryComponent } from './components/advisor-summary/advisor-summary.component';
import { AvisoOperativoItemComponent } from './components/aviso-operativo-item/aviso-operativo-item.component';
import { AvisoOperativoListComponent } from './components/aviso-operativo-list/aviso-operativo-list.component';
import { CiudadanoCardComponent } from './components/ciudadano-card/ciudadano-card.component';
import { EntidadCardComponent } from './components/entidad-card/entidad-card.component';
import { ServicioCardComponent } from './components/servicio-card/servicio-card.component';
import { StepperAtencionComponent } from './components/stepper-atencion/stepper-atencion.component';
import { AppShellComponent } from './layouts/app-shell/app-shell.component';
import { ConfirmModalComponent } from './ui/confirm-modal/confirm-modal.component';
import { EmptyStateComponent } from './ui/empty-state/empty-state.component';
import { LoadingSkeletonComponent } from './ui/loading-skeleton/loading-skeleton.component';
import { StatusBadgeComponent } from './ui/status-badge/status-badge.component';
import { ToastStackComponent } from './ui/toast-stack/toast-stack.component';

const SHARED_DECLARATIONS = [
  AppHeaderComponent,
  AdvisorSummaryComponent,
  AppShellComponent,
  StepperAtencionComponent,
  CiudadanoCardComponent,
  EntidadCardComponent,
  ServicioCardComponent,
  AvisoOperativoListComponent,
  AvisoOperativoItemComponent,
  LoadingSkeletonComponent,
  EmptyStateComponent,
  StatusBadgeComponent,
  ConfirmModalComponent,
  ToastStackComponent
];

@NgModule({
  declarations: SHARED_DECLARATIONS,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...SHARED_DECLARATIONS
  ]
})
export class SharedModule {}
