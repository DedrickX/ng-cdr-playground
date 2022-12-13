import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
// import { HIERARCHY_CHANGE_DETECTION_STRATEGY } from '../hierarchy.module';
import { ScanCounterService } from '../scan-counter.service';

@Component({
  selector: 'app-intro-grandchild',
  templateUrl: './hierarchy-grandchild.component.html',
  styleUrls: ['./hierarchy-grandchild.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HierarchyGrandchildComponent implements OnInit {

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
