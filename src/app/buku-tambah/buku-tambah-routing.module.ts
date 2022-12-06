import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BukuTambahPage } from './buku-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: BukuTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BukuTambahPageRoutingModule {}
