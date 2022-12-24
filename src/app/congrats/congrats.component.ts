import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { gsap } from 'gsap';
import * as _ from "lodash";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {BoardingPassComponent} from "../boarding-pass/boarding-pass.component";

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss']
})
export class CongratsComponent implements AfterViewInit {
  public NUM_OF_STARS = 200;
  @ViewChild('header') headerElement: ElementRef | undefined;
  @ViewChild(BoardingPassComponent, { read: ElementRef }) boardingPass: ElementRef | undefined;
  @ViewChildren('star', { read: ElementRef }) starElements: QueryList<ElementRef> | undefined;

  ngAfterViewInit() {
    this.animateText();
    this.animateStars();
  }

  private animateText() {
    gsap.from(this.headerElement?.nativeElement, 0.6, {
      scale: 0.4,
      opacity: 0,
      rotation: 45,
      ease: "power1.out"
    });
    gsap.from(this.boardingPass?.nativeElement, 0.8, {
      scale: 0.4,
      opacity: 0,
      rotation: 15,
      ease: "power1.out"
    });
  }

  private animateStars() {
    const xSeed = _.random(350, 380);
    const ySeed = _.random(120, 170);

    this.starElements?.forEach(star => {
      const speed = _.random(1, 5);
      const rotation = _.random(5, 100);
      const scale = _.random(0.8, 1.5);
      const x = _.random(-xSeed, xSeed);
      const y = _.random(-ySeed, ySeed);

      gsap.to(star.nativeElement, speed, {
        x,
        y,
        ease: 'power1.out',
        opacity: 0,
        rotation,
        scale,
        /*onStartParams: [star.nativeElement],
        onStart: (element) => element.css('display', 'block'),
        onCompleteParams: [star.nativeElement],
        onComplete: (element) => element.css('display', 'none')*/
      });
    });
  }
}
