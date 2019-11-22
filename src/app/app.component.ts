import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string;
  isPlaying: boolean;
  errorNick: boolean;
  finnishOver: any;

  constructor(){
    this.finnishOver = () => {
    this.isPlaying = false;
  }
  }

  OnInit() {
    this.isPlaying = false;
    this.errorNick = false;
    this.name = "";
  }

  initGame() {
    if(this.name != undefined && this.name.length >= 3 && this.name.length <= 8) {
      this.isPlaying = true;
    }
    else{
      this.errorNick = true;
    }
  }
  


}
