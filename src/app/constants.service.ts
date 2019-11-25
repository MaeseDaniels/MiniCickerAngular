import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class Constants {
  score: number;
  nickName: string;

  constructor() { 
    this.score = 0;
    this.nickName = "";
  }

  getScore() {
    return this.score;
  }

  setScore(newScore) {
    this.score = newScore;
  }

  sumOnePoint() {
    this.score = this.score + 1;
  }

  getNickName() {
    return this.nickName;
  }

  setNickName(newNickName) {
    this.nickName = newNickName;
  }
}