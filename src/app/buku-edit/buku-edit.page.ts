import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-buku-edit',
  templateUrl: './buku-edit.page.html',
  styleUrls: ['./buku-edit.page.scss'],
})
export class BukuEditPage implements OnInit {
  id: any;
  judul: any;
  penulis: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.ambilBuku(this.id);
    })
  }

  ngOnInit() {
  }

  ambilBuku(id:any) {
    this.apiService.viewBuku(id).subscribe((res:any)=> {
      console.log('success', res);
      let buku = res;
      this.judul = buku.judul;
      this.penulis = buku.penulis;
    },(error:any)=>{
      console.log('error', error);
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Gagal Ambil Data',
        buttons : ['OK'],
      }).then(res=>{
        res.present();
      });
    })
  }

  editBuku(){
    let url = this.apiService.apiURL()+"/edit.php?id="+this.id;
    Http.request({
      method : "POST",
      url : url,
      headers : {"Content-Type" : "application/json"},
      data : {
        judul: this.judul,
        penulis: this.penulis
      },
    }).then((data: any)=>{
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Berhasil Edit Buku',
        buttons : ['OK'],
      }).then(res=>{
        res.present();
      });
      this.router.navigateByUrl('/home');
    },(err)=>{
      console.log(err);
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Gagal Edit Buku',
        buttons : ['OK'],
      }).then(res=>{
        res.present();
      });
    })
  }

}
