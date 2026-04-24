import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomePageComponent } from './pages/admin-home/admin-home-page.component';

@NgModule({
  declarations: [AdminHomePageComponent],
  imports: [SharedModule, AdminRoutingModule]
})
export class AdminModule {}
