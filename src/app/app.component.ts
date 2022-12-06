import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/home', icon: 'home' },
    { title: 'Data Siswa', url: '/siswa', icon: 'person' }
  ];
  public labels = [];
  constructor() {}
}
