import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GudangPageRoutingModule } from './gudang-routing.module';

import { GudangPage } from './gudang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GudangPageRoutingModule
  ],
  declarations: [GudangPage]
})
export class GudangPageModule {}
