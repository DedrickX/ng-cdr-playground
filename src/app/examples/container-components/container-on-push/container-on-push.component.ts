import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { createPerson, getEmptyPerson, Person } from '../../../models/models';

@Component({
  selector: 'app-container-on-push',
  templateUrl: './container-on-push.component.html',
  styleUrls: ['./container-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerOnPushComponent {
  vm$ = new Subject<Person>();
  state: Person = getEmptyPerson();

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  setState(index: number) {
    this.state = createPerson(index)
  }

  setStateDelayed(index: number) {
    setTimeout(() => {
      this.state = createPerson(index);
      // first possible solution
      this.cdr.detectChanges();
    }, 500);
  }

  setStateDelayedVM(index: number) {
    setTimeout(() => {
      this.state = createPerson(index);
      // second possible solution
      this.vm$.next(this.state);
    }, 500);
  }
}
