import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { QuestionComponent } from './main/question/question.component';
import { ResutlComponent } from './resutl/resutl.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {path : '', component : WelcomeComponent },
  {path : 'test', component: MainComponent},
  {path : 'result', component : ResutlComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    QuestionComponent,
    ResutlComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
