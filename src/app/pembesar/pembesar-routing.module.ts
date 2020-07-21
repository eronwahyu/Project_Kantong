import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PembesarPage } from './pembesar.page';

const routes: Routes = [
  {
    path: '',
    component: PembesarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PembesarPageRoutingModule {}
