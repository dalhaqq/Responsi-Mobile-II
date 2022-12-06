import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private alert: AlertController) { }
 
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
 
  postMethod(data: any, link: any): Observable<any> {
    return this.http.post(this.apiURL() + '/' + link, data);
  }
 
  public getData(key: string) {
    return localStorage.getItem(key)
  }
 
  public clearData() {
    localStorage.clear();
  }
 
  notifikasi(pesan: string) {
    return this.alert.create({
      header: 'Notifikasi',
      message: pesan,
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }

  apiURL() {
    return "http://localhost:8080";
  }

  logout() {
    this.clearData();
  }
}