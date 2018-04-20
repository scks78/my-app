import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke.component';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {
  jokes:Joke[];
  constructor() {
    this.jokes = [
        new Joke( 'What did the cheese say when it looked in the mirror?','Halloumi (Hello Me)'),
        new Joke( 'What kind of cheese do you use to disguise a small horse','Mask-a-pony'),
        new Joke( 'A kid threw a lump of cheddar?','I thought \'That\'s not very mature.\'')
    ];      
}
 
  addJoke(joke){
    this.jokes.unshift(joke);
  }

  deleteJoke(joke){
    const indexToDelete=this.jokes.indexOf(joke);
    if(indexToDelete !== -1){
      this.jokes.splice(indexToDelete,1);
    }
  }

  ngOnInit() {
  }
}
