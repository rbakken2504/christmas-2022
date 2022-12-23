import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SawVideoComponent } from './saw-video/saw-video.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import { TimerComponent } from './timer/timer.component';
import {CountdownComponent} from "ngx-countdown";
import { ProblemComponent } from './problem/problem.component';
import {FormsModule} from "@angular/forms";
import {LetModule} from "@ngrx/component";
import { CongratsComponent } from './congrats/congrats.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import { BoardingPassComponent } from './boarding-pass/boarding-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    SawVideoComponent,
    PuzzleComponent,
    TimerComponent,
    ProblemComponent,
    CongratsComponent,
    BoardingPassComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        YouTubePlayerModule,
        NgxTypedJsModule,
        CountdownComponent,
        FormsModule,
        LetModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(lib: FaIconLibrary) {
    lib.addIcons(faStar);
  }
}
