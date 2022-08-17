import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { createPerson, getEmptyPerson, Person } from '../../../models/models';
import { ScanCounterService } from '../scan-counter.service';

@Component({
  selector: 'app-intro-child',
  templateUrl: './intro-child.component.html',
  styleUrls: ['./intro-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroChildComponent {

  @Input()
  set state(value: Person) {
    this.stateValue = value;
  };

  @Output()
  stateChange = new EventEmitter<Person>();

  stateValue: Person = getEmptyPerson();

  get age(): number {
    this.counter.count('child')
    return this.stateValue.age
  }

  constructor(
    private counter: ScanCounterService
  ) { }

  setState(index: number) {
    this.stateValue = createPerson(index);
    this.stateChange.emit(this.stateValue);
  }
}
