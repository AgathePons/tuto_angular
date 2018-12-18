import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YOLO';
  isAuth = false;

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';
  appareilStatusOn = 'Allumé';
  appareilStatusOff = "Eteint";

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
