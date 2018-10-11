import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers = [];

  receiveNumberFromGame(gameNumber: {number : Number}) {
    this.numbers.push(gameNumber.number);
  }

}
