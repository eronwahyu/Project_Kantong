import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihBC1.1PageRoutingModule } from './pilih-bc1.1-routing.module';

import { PilihBC1.1Page } from './pilih-bc1.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilihBC1.1PageRoutingModule
  ],
  declarations: [PilihBC1.1Page]
})
export class PilihBC1.1PageModule {}
