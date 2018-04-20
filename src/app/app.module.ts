import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent } from './joke.component';
import { JokelistComponent } from './jokelist.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokelistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [JokeComponent]
  //bootstrap: [JokelistComponent]
})
export class AppModule { }
