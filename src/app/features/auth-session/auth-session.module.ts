import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthSessionRoutingModule } from './auth-session-routing.module';
import { SessionBootstrapPageComponent } from './pages/session-bootstrap/session-bootstrap-page.component';

@NgModule({
  declarations: [SessionBootstrapPageComponent],
  imports: [SharedModule, AuthSessionRoutingModule]
})
export class AuthSessionModule {}
