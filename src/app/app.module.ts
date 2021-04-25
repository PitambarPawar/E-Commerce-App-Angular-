import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothComponent } from './cloth/cloth.component';
import { LaptopComponent } from './laptop/laptop.component';
import { GameComponent } from './game/game.component';
import { DrinkComponent } from './drink/drink.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothComponent,
    LaptopComponent,
    GameComponent,
    DrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
