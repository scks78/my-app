import { Component } from '@angular/core';
import { Joke } from './joke.component';


//class Joke {
//    public setup: string;
//     public punchline: string;
//     public hide: boolean;

//     constructor(setup:string,punchline:string) {
//         this.setup=setup;
//         this.punchline=punchline;
//         this.hide=true;
        
//     }

//     toggle() {
//         this.hide=!this.hide;
//     }

// }


@Component({
    selector: 'joke-list',
    //template: `
    //<div class="card mb-3" *ngFor="let joke of jokes" style="width:320px;">
    //<div class="card-body">
    //    <h4 class="card-title">{{ joke.setup }}</h4>
    //    <p class="card-text" [hidden]="joke.hide">{{ joke.punchline }}</p>
    //<!--<button class="btn btn-primary" (click)="toggle(joke)" role="button">Tell me</button>-->
    //    <button class="btn btn-primary" (click)="joke.toggle()" role="button">Tell me</button>
    //</div>
    //</div>
    //`
    template: `<app-joke-form></app-joke-form>
    <joke *ngFor="let j of jokes" [joke]="j"></joke>
    `

    
})

export class JokelistComponent {
    //jokes: Object[];
    jokes:Joke[];

    constructor() {
        //this.jokes = [
        //{ 
        //    setup:'What did the cheese say when it looked in the mirror?',
        //    punchline:'Halloumi (Hello Me)',
        //    hide:true,
        //},
        //{ 
        //    setup:'What kind of cheese do you use to disguise a small horse?',
        //    punchline:'Mask-a-pony',
        //    hide:true,
        //},
        //{ 
        //    setup:'A kid threw a lump of cheddar?',
        //    punchline:'I thought \'That\'s not very mature.\'',
        //    hide:true,
        //}
        //];

        this.jokes = [
            new Joke( 'What did the cheese say when it looked in the mirror?','Halloumi (Hello Me)'),
            new Joke( 'What kind of cheese do you use to disguise a small horse','Mask-a-pony'),
            new Joke( 'A kid threw a lump of cheddar?','I thought \'That\'s not very mature.\'')
        ];      
    }

    //toggle(joke) {
    //   joke.hide=!joke.hide;
    //}

}