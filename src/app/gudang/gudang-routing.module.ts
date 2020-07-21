import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GudangPage } from './gudang.page';

const routes: Routes = [
  {
    path: '',
    component: GudangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GudangPageRoutingModule {}
