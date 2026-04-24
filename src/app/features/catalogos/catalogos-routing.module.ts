import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogosHomePageComponent } from './pages/catalogos-home/catalogos-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogosHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule {}
