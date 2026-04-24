import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './core/guards/role.guard';
import { SessionGuard } from './core/guards/session.guard';
import { AppShellComponent } from './shared/layouts/app-shell/app-shell.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth-session/auth-session.module').then(
        (module) => module.AuthSessionModule
      )
  },
  {
    path: 'sesion',
    loadChildren: () =>
      import('./features/auth-session/auth-session.module').then(
        (module) => module.AuthSessionModule
      )
  },
  {
    path: '',
    component: AppShellComponent,
    canActivate: [SessionGuard],
    canActivateChild: [SessionGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          )
      },
      {
        path: 'atencion',
        loadChildren: () =>
          import('./features/atencion/atencion.module').then(
            (module) => module.AtencionModule
          )
      },
      {
        path: 'avisos-operativos',
        loadChildren: () =>
          import('./features/avisos-operativos/avisos-operativos.module').then(
            (module) => module.AvisosOperativosModule
          )
      },
      {
        path: 'admin',
        canActivate: [RoleGuard],
        canActivateChild: [RoleGuard],
        data: {
          roles: ['administrador', 'moderador']
        },
        loadChildren: () =>
          import('./features/admin/admin.module').then(
            (module) => module.AdminModule
          )
      },
      {
        path: 'catalogos',
        canActivate: [RoleGuard],
        canActivateChild: [RoleGuard],
        data: {
          roles: ['administrador', 'moderador']
        },
        loadChildren: () =>
          import('./features/catalogos/catalogos.module').then(
            (module) => module.CatalogosModule
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
