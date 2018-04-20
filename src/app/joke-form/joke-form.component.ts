import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Joke} from '../joke.component';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated =new EventEmitter();
  @Output() jokeDeleted =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  // createJoke(){
  //    this.jokeCreated.emit(new Joke('A setup','A punchline'));
  // }
  createJoke(setup: string,punchline: string){
    this.jokeCreated.emit(new Joke(setup,punchline));
  }
}
