import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.css' ]
})
export class GameComponent  {

  @Input() name;
  @Input() finnishOver;
  nickName: string;
  score: number;
  time: number;
  timeInterval: any;
  posTop: number;
  posLeft: number;
  gameOver: boolean;
  pos: object;

  constructor(){
    this.nickName = "";
    this.score = 0;
    this.time = 5;
    this.gameOver = false;
    this.posTop = Math.random() * 550;
    this.posLeft = Math.random() * 750;
    
    this.pos={
      'top' : this.posTop + "px",
      'left' : this.posLeft + "px"

    }

    this.timeInterval = setInterval(()=> this.time > 0 ? this.time-- : this.finnishGame(), 1000);

    
  }
  

  hit() {
    this.score++;
    this.posTop = Math.random() * 550;
    this.posLeft = Math.random() * 750;
    this.pos={
      'top' : this.posTop + "px",
      'left' : this.posLeft + "px"

    }
    
  }

  finnishGame() {
    clearInterval(this.timeInterval);
    this.gameOver = true;
    this.finnishOver();
  }

}
