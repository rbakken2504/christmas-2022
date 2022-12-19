import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SawVideoComponent} from "./saw-video/saw-video.component";
import {PuzzleComponent} from "./puzzle/puzzle.component";

const routes: Routes = [
  { path: 'puzzle', component: PuzzleComponent },
  { path: '**', component: SawVideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
