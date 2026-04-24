import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionBootstrapPageComponent } from './pages/session-bootstrap/session-bootstrap-page.component';

const routes: Routes = [
  {
    path: 'bootstrap',
    component: SessionBootstrapPageComponent
  },
  {
    path: 'callback',
    component: SessionBootstrapPageComponent
  },
  {
    path: '',
    component: SessionBootstrapPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSessionRoutingModule {}
