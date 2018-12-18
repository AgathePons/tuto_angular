import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YOLO';
  isAuth = false;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'Allumé'
    },
    {
      name: 'Frigo',
      status: 'Allumé'
    },
    {
      name: 'Ordinateur',
      status: 'Eteint'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )
  };

  onAllumer() {
    console.log('on');
  }
}
