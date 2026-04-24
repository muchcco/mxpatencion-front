import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AtencionRoutingModule } from './atencion-routing.module';
import { CiudadanoSearchFormComponent } from './components/ciudadano-search-form/ciudadano-search-form.component';
import { AtencionEntidadPageComponent } from './pages/atencion-entidad/atencion-entidad-page.component';
import { AtencionHomePageComponent } from './pages/atencion-home/atencion-home-page.component';
import { AtencionServicioPageComponent } from './pages/atencion-servicio/atencion-servicio-page.component';

@NgModule({
  declarations: [
    AtencionHomePageComponent,
    AtencionEntidadPageComponent,
    AtencionServicioPageComponent,
    CiudadanoSearchFormComponent
  ],
  imports: [SharedModule, AtencionRoutingModule]
})
export class AtencionModule {}
