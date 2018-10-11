import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  number: number = 0;
  interval;
  @Output() numberIncrementalEvent = new EventEmitter<{number: number}>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(()=> {
      console.log(this.number);
      this.numberIncrementalEvent.emit({number: this.number});
      this.number++;
      },
      1000); 
  }

  stopGame() {
    clearInterval(this.interval);
  }

}
