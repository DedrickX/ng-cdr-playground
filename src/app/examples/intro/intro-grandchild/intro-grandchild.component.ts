import { Component, Input, OnInit } from '@angular/core';
import { INTRO_CHANGE_DETECTION_STRATEGY } from '../intro.module';
import { ScanCounterService } from '../scan-counter.service';

@Component({
  selector: 'app-intro-grandchild',
  templateUrl: './intro-grandchild.component.html',
  styleUrls: ['./intro-grandchild.component.scss'],
  changeDetection: INTRO_CHANGE_DETECTION_STRATEGY
})
export class IntroGrandchildComponent implements OnInit {

  @Input() age: number = 0

  get ageValue(): number {
    this.counter.count('grandChild')
    return this.age
  }

  constructor(
    private counter: ScanCounterService
  ) { }

  ngOnInit(): void {
  }

  modifyAge(change: number) {
    this.age = this.age + change;
  }
}