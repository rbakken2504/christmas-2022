import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CountdownConfig, CountdownEvent} from "ngx-countdown";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Output() timerExpired = new EventEmitter();
  public config: CountdownConfig = {
    leftTime: 3600,
    format: 'mm:ss',
    prettyText: text => `<span class="digit">${text}</span>`,
    notify: 0
  };
  private STORAGE_KEY = 'timer';
  private ONE_HOUR = 3600;

  ngOnInit() {
    let value = +localStorage.getItem(this.STORAGE_KEY)!! ?? this.ONE_HOUR;
    if (value <= 0) value = this.ONE_HOUR;
    this.config = { ...this.config, leftTime: value };
  }

  public handleEvent(event: CountdownEvent) {
    if (event.action === 'done') {
      this.timerExpired.emit();
    }
    if (event.action === 'notify') {
      localStorage.setItem(this.STORAGE_KEY, `${event.left / 1000}`);
    }
  }
}
