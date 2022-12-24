import {Component, OnInit} from '@angular/core';
import {CountdownConfig, CountdownEvent} from "ngx-countdown";

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.scss']
})
export class FailureComponent implements OnInit {
  private TWELVE_HOURS = 10;
  public config: CountdownConfig = {
    leftTime: this.TWELVE_HOURS,
    format: 'HH:mm:ss',
    prettyText: text => `<span class="digit">${text}</span>`,
    notify: 0
  };
  public showGift = false;
  private STORAGE_KEY = "FAIL-TIMER";

  ngOnInit() {
    let value = localStorage.getItem(this.STORAGE_KEY)!! ?? this.TWELVE_HOURS;
    let leftTime = value === undefined ? this.TWELVE_HOURS : parseInt(value, 10);
    this.config = { ...this.config, leftTime };
  }

  handleEvent(event: CountdownEvent) {
    if (event.action === 'done') {
      this.showGift = true;
    }
    if (event.action === 'notify') {
      localStorage.setItem(this.STORAGE_KEY, `${event.left / 1000}`);
    }
  }
}
