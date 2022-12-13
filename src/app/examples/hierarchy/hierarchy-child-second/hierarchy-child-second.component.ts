import { Component, EventEmitter, Input, Output } from '@angular/core';
import { take, timer } from 'rxjs';
import { createPerson, getEmptyPerson, Person } from '../../../models/models';
import { HIERARCHY_CHANGE_DETECTION_STRATEGY } from '../hierarchy.module';
import { ScanCounterService } from '../scan-counter.service';

@Component({
  selector: 'app-intro-child-second',
  templateUrl: './hierarchy-child-second.component.html',
  styleUrls: ['./hierarchy-child-second.component.scss'],
  changeDetection: HIERARCHY_CHANGE_DETECTION_STRATEGY
})
export class HierarchyChildSecondComponent {

  @Input()
  set state(value: Person) {
    this.stateValue = value;
  };

  @Output()
  stateChange = new EventEmitter<Person>();

  stateValue: Person = getEmptyPerson();

  get age(): number {
    this.counter.count('child2')
    return this.stateValue.age
  }

  constructor(
    private counter: ScanCounterService
  ) { }

  setState(index: number) {
    this.stateValue = createPerson(index);
    this.stateChange.emit(this.stateValue);
  }

  doAsyncThings() {
    // timer(500, 500).pipe(
    //   take(5)
    // ).subscribe((value) => console.log('Len tak počítam do 5:', value + 1))
  }

}
