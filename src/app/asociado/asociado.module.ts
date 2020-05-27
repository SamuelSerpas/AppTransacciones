import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsociadoPageRoutingModule } from './asociado-routing.module';

import { AsociadoPage } from './asociado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsociadoPageRoutingModule
  ],
  declarations: [AsociadoPage]
})
export class AsociadoPageModule {}
