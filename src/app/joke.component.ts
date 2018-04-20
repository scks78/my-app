import { Component,Input } from '@angular/core';

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
    selector: 'joke',
    //template: `
    //<h1>What did the cheese say when it looked in the mirror?</h1>
    //<p>Halloumi (hello me)</p>
    //`
    //template: `
    //<h1>{{ setup }}</h1>
    //<p>{{ punchline }}</p>
    //`
    template: `
    <div class="card mb-3" style="width:320px;">
    <div class="card-body">
        <h4 class="card-title">{{ joke.setup }}</h4>
        <p class="card-text" [hidden]="joke.hide">{{ joke.punchline }}</p>
    <!--<button class="btn btn-primary" (click)="toggle(joke)" role="button">Tell me</button>-->
        <button class="btn btn-primary" (click)="joke.toggle()" role="button">Tell me</button>
    </div>
    </div>
    `
})

export class JokeComponent {
    @Input() joke:object;
    setup: string;
    punchline:string;

    constuctor() {
        this.setup='What did the cheese say when it looked in the mirror?';
        this.punchline='Halloumi (Hello Me)';
    }
}

