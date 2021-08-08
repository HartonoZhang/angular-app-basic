import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-angular-app';
  increment = 1;
  arr = [
    this.increment
  ];

  onClickButton(){
    console.log('button clicked');
  }

  incrementPlus(){
    this.increment++;
    this.arr.push(this.increment);
  }
}
