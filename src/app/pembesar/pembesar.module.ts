import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PembesarPageRoutingModule } from './pembesar-routing.module';

import { PembesarPage } from './pembesar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PembesarPageRoutingModule
  ],
  declarations: [PembesarPage]
})
export class PembesarPageModule {}
