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

@NgModule({
  declarations: [
    AppComponent,
    SawVideoComponent,
    PuzzleComponent,
    TimerComponent,
    ProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    NgxTypedJsModule,
    CountdownComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
