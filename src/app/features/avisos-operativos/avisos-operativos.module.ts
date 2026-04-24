import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AvisosOperativosRoutingModule } from './avisos-operativos-routing.module';
import { AvisosHomePageComponent } from './pages/avisos-home/avisos-home-page.component';

@NgModule({
  declarations: [AvisosHomePageComponent],
  imports: [SharedModule, AvisosOperativosRoutingModule]
})
export class AvisosOperativosModule {}
