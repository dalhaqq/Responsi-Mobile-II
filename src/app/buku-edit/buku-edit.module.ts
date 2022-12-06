import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukuEditPageRoutingModule } from './buku-edit-routing.module';

import { BukuEditPage } from './buku-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukuEditPageRoutingModule
  ],
  declarations: [BukuEditPage]
})
export class BukuEditPageModule {}
