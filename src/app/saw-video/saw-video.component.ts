import {Component, ViewChild} from '@angular/core';
import {YouTubePlayer} from "@angular/youtube-player";
import {Router} from "@angular/router";

@Component({
  selector: 'app-saw-video',
  templateUrl: './saw-video.component.html',
  styleUrls: ['./saw-video.component.scss']
})
export class SawVideoComponent {
  @ViewChild('ytPlayer') youtubePlayer: YouTubePlayer | undefined;
  public playerVariables: YT.PlayerVars = { enablejsapi: 1 };
  public show = false;
  public playerReady = false;
  public messageComplete = false;
  public showYesBtn = false;

  constructor(private _router: Router) {}

  public async onStateChange(evt: YT.OnStateChangeEvent) {
    if (evt.data === YT.PlayerState.ENDED) {
      await this._router.navigate(['puzzle']);
    }
  }

  public async onYesClick() {
    this.show = true;
    await this._requestFullScreen();
    this.youtubePlayer?.setVolume(100);
    this.youtubePlayer?.playVideo();
  }

  public onMessageComplete() {
    setTimeout(() => {
      this.messageComplete = true;
    }, 1000);
  }

  private async _requestFullScreen() {
    const iFrame = (this.youtubePlayer!['_player'] as YT.Player).getIframe();
    await iFrame.requestFullscreen();
  }
}
