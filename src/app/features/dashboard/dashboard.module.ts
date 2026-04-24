import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomePageComponent } from './pages/dashboard-home/dashboard-home-page.component';

@NgModule({
  declarations: [DashboardHomePageComponent],
  imports: [SharedModule, DashboardRoutingModule]
})
export class DashboardModule {}
