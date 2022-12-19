import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SawVideoComponent } from './saw-video/saw-video.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import {NgxTypedJsModule} from "ngx-typed-js";

@NgModule({
  declarations: [
    AppComponent,
    SawVideoComponent,
    PuzzleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
