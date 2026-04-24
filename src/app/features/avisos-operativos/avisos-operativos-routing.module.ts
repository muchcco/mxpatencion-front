import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisosHomePageComponent } from './pages/avisos-home/avisos-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: AvisosHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisosOperativosRoutingModule {}
