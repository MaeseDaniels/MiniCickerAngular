import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { Constants } from './constants.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GameComponent ],
  bootstrap:    [ AppComponent ],
  providers: [Constants]
})
export class AppModule { }
