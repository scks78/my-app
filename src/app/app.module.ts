import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes:Routes =[
  {path: '',component:HomeComponent},
  {path: 'jokes',component:JokelistComponent},
  {path: 'joke-list',redirectTo:'jokes'},
  {path: 'joke/:id',component:JokeComponent},
  {path: '**',component:PageNotFoundComponent},
  //{path: 'joke/foo',component:FooComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokelistComponent,
    JokeFormComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [JokeComponent]
  //bootstrap: [JokelistComponent]
})
export class AppModule { }
