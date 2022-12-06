import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukuTambahPageRoutingModule } from './buku-tambah-routing.module';

import { BukuTambahPage } from './buku-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukuTambahPageRoutingModule
  ],
  declarations: [BukuTambahPage]
})
export class BukuTambahPageModule {}
