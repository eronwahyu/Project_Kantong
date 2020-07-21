import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetelanPageRoutingModule } from './setelan-routing.module';

import { SetelanPage } from './setelan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetelanPageRoutingModule
  ],
  declarations: [SetelanPage]
})
export class SetelanPageModule {}
