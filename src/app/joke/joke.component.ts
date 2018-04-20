import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 

export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup:string,punchline:string) {
      this.setup=setup;
      this.punchline=punchline;
      this.hide=true;
      
  }

  toggle() {
      this.hide=!this.hide;
  }

}

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  //@Input() joke:object;
  @Input() joke:Joke;
  @Output() jokeDeleted =new EventEmitter<Joke>();
  id:number;
  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(params=>{
      //console.log(params);
      this.id=params.id
    });
   }

  ngOnInit() {
  }
  
  jokeDelete(){
    this.jokeDeleted.emit(this.joke);
  }
}
