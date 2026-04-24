import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtencionHomePageComponent } from './pages/atencion-home/atencion-home-page.component';
import { AtencionEntidadPageComponent } from './pages/atencion-entidad/atencion-entidad-page.component';
import { AtencionServicioPageComponent } from './pages/atencion-servicio/atencion-servicio-page.component';

const routes: Routes = [
  {
    path: '',
    component: AtencionHomePageComponent
  },
  {
    path: 'entidades',
    component: AtencionEntidadPageComponent
  },
  {
    path: 'servicios',
    component: AtencionServicioPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtencionRoutingModule {}
