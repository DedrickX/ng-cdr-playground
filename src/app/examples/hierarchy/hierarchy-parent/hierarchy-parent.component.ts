import { Component } from '@angular/core';
import { createPerson, getEmptyPerson, Person } from '../../../models/models';
import { HIERARCHY_CHANGE_DETECTION_STRATEGY } from '../hierarchy.module';
import { ScanCounterService } from '../scan-counter.service';

@Component({
  selector: 'app-intro-parent',
  templateUrl: './hierarchy-parent.component.html',
  styleUrls: ['./hierarchy-parent.component.scss'],
  changeDetection: HIERARCHY_CHANGE_DETECTION_STRATEGY
})
export class HierarchyParentComponent {

  state: Person = getEmptyPerson();

  get age(): number {
    this.counter.count('parent')
    return this.state.age
  }

  constructor(
    private counter: ScanCounterService,
  ) {
  }

  setState(index: number) {
    this.state = createPerson(index)
  }
}
