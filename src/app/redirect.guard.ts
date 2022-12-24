import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const puzzleStarted = !!localStorage.getItem('PUZZLE-STARTED');
    const failedPuzzle = !!localStorage.getItem('FAILED-PUZZLE');
    const solvedPuzzle = !!localStorage.getItem('SOLVED-PUZZLE');

    switch (route.url[0]?.path) {
      case 'puzzle':
        return this._guardPuzzle({ puzzleStarted, failedPuzzle, solvedPuzzle });
        break;
      case 'congrats':
        return this._guardCongrats({ puzzleStarted, failedPuzzle, solvedPuzzle });
      case 'failure':
        return this._guardFailure({ puzzleStarted, failedPuzzle, solvedPuzzle });
      default:
        return this._guardVideo({ puzzleStarted, failedPuzzle, solvedPuzzle });
    }
  }

  private _guardPuzzle(params: { puzzleStarted: boolean, failedPuzzle: boolean, solvedPuzzle: boolean }): boolean {
    const { puzzleStarted, failedPuzzle, solvedPuzzle } = params;
    if (failedPuzzle) {
      this._router.navigate(['failure']);
    }

    if (solvedPuzzle) {
      this._router.navigate(['congrats']);
    }

    if (puzzleStarted) {
      return true;
    }

    this._router.navigate((['']));
    return false;
  }

  private _guardCongrats(params: { puzzleStarted: boolean, failedPuzzle: boolean, solvedPuzzle: boolean }): boolean {
    const { puzzleStarted, failedPuzzle, solvedPuzzle } = params;
    if (failedPuzzle) {
      this._router.navigate(['failure']);
    }

    if (solvedPuzzle) {
      return true;
    }

    if (puzzleStarted) {
      this._router.navigate(['puzzle']);
    }

    this._router.navigate((['']));
    return false;
  }

  private _guardFailure(params: { puzzleStarted: boolean, failedPuzzle: boolean, solvedPuzzle: boolean }): boolean {
    const { puzzleStarted, failedPuzzle, solvedPuzzle } = params;
    if (failedPuzzle) {
      return true;
    }

    if (solvedPuzzle) {
      this._router.navigate(['congrats']);
    }

    if (puzzleStarted) {
      this._router.navigate(['puzzle']);
    }

    this._router.navigate((['']));
    return false;
  }

  private _guardVideo(params: { puzzleStarted: boolean, failedPuzzle: boolean, solvedPuzzle: boolean }): boolean {
    const { puzzleStarted, failedPuzzle, solvedPuzzle } = params;
    if (failedPuzzle) {
      this._router.navigate(['failure']);
    }

    if (solvedPuzzle) {
      this._router.navigate(['congrats']);
    }

    if (puzzleStarted) {
      this._router.navigate(['puzzle']);
    }

    return true;
  }

}
