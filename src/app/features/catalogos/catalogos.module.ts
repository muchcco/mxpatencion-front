import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CatalogosRoutingModule } from './catalogos-routing.module';
import { CatalogosHomePageComponent } from './pages/catalogos-home/catalogos-home-page.component';

@NgModule({
  declarations: [CatalogosHomePageComponent],
  imports: [SharedModule, CatalogosRoutingModule]
})
export class CatalogosModule {}
