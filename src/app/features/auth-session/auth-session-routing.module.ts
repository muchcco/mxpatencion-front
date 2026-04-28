import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabLockGuard } from '../../core/guards/tab-lock.guard';
import { SessionBlockedPageComponent } from './pages/session-blocked/session-blocked-page.component';
import { SessionBootstrapPageComponent } from './pages/session-bootstrap/session-bootstrap-page.component';

const routes: Routes = [
  {
    path: 'bloqueada',
    component: SessionBlockedPageComponent
  },
  {
    path: 'bootstrap',
    component: SessionBootstrapPageComponent,
    canActivate: [TabLockGuard]
  },
  {
    path: 'callback',
    component: SessionBootstrapPageComponent,
    canActivate: [TabLockGuard]
  },
  {
    path: '',
    component: SessionBootstrapPageComponent,
    canActivate: [TabLockGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSessionRoutingModule {}
