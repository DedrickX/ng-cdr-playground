import { ChangeDetectionStrategy, Component } from '@angular/core';
import { createPerson, getEmptyPerson, Person } from '../../../models/models';

@Component({
  selector: 'app-container-on-push',
  templateUrl: './container-on-push.component.html',
  styleUrls: ['./container-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerOnPushComponent {

  state: Person = getEmptyPerson();

  constructor() { }

  setState(index: number) {
    this.state = createPerson(index)
  }

  setStateDelayed(index: number) {
    setTimeout(() => {
      this.state = createPerson(index);
    }, 500);
  }

}
