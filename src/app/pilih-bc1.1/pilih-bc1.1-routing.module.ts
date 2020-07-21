import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilihBC1.1Page } from './pilih-bc1.1.page';

const routes: Routes = [
  {
    path: '',
    component: PilihBC1.1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilihBC1.1PageRoutingModule {}
