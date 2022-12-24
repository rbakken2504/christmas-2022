import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SawVideoComponent} from "./saw-video/saw-video.component";
import {PuzzleComponent} from "./puzzle/puzzle.component";
import {CongratsComponent} from "./congrats/congrats.component";
import {FailureComponent} from "./failure/failure.component";
import {RedirectGuard} from "./redirect.guard";

const routes: Routes = [
  { path: 'puzzle', component: PuzzleComponent, canActivate: [RedirectGuard] },
  { path: 'congrats', component: CongratsComponent, canActivate: [RedirectGuard] },
  { path: 'failure', component: FailureComponent, canActivate: [RedirectGuard] },
  { path: '**', pathMatch: 'full', component: SawVideoComponent, canActivate: [RedirectGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RedirectGuard]
})
export class AppRoutingModule { }
