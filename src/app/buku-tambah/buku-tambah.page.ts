import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Http } from '@capacitor-community/http';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-buku-tambah',
  templateUrl: './buku-tambah.page.html',
  styleUrls: ['./buku-tambah.page.scss'],
})
export class BukuTambahPage implements OnInit {
  judul: any;
  penulis: any;
  token: any;
  nama: any;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController

  ) { }

  ngOnInit() {
    this.token = this.authService.getData('token');
      if (this.token != null) {
        this.nama = this.authService.getData('username');
      } else {
        this.router.navigateByUrl('/login');
      }
  }

  addBuku(){
    let url = this.apiService.apiURL() + "/tambah.php";
    let date = new Date();
    Http.request({
      method: "POST",
      url: url,
      headers: {"Content-Type": "application/json"},
      data: {
        judul: this.judul,
        penulis: this.penulis
      }
    }).then((data) => {
      this.judul = ''
      this.penulis = ''
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input Buku',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/home');
    }, (error) => {
      console.log(error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input Buku',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}
