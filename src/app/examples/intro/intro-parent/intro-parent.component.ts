import { ChangeDetectionStrategy, Component } from '@angular/core';
import { createPerson, getEmptyPerson, Person } from '../../../models/models';
import { ScanCounterService } from '../scan-counter.service';

@Component({
  selector: 'app-intro-parent',
  templateUrl: './intro-parent.component.html',
  styleUrls: ['./intro-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroParentComponent {

  state: Person = getEmptyPerson();

  get age(): number {
    this.counter.count('parent')
    return this.state.age
  }

  constructor(
    private counter: ScanCounterService
  ) { }

  setState(index: number) {
    this.state = createPerson(index)
  }
}
