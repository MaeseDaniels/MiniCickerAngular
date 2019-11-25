import { Component, OnInit } from '@angular/core';
import { Constants } from './constants.service.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [Constants]
})
export class AppComponent  {
  isPlaying: boolean;
  errorNick: boolean;
  finnishOver: any;

  constructor(private constants: Constants){
    this.finnishOver = () => {
      this.isPlaying = false;
    }
  }

  OnInit() {
    this.isPlaying = false;
    this.errorNick = false;
  }

  initGame() {
    if(this.constants.getNickName() != undefined && this.constants.getNickName().length >= 3 && this.constants.getNickName().length <= 8) {
      this.isPlaying = true;
    }
    else{
      this.errorNick = true;
    }
  }
  


}
