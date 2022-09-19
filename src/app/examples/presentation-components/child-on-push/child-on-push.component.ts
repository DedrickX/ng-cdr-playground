import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { getEmptyPerson, Person } from '../../../models/models';

@Component({
  selector: 'app-child-on-push',
  templateUrl: './child-on-push.component.html',
  styleUrls: ['./child-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildOnPushComponent {
  @Input('state') set setState(s: Person) {
    console.log('-- input push child --');
    this.state = s;
  };

  state: Person = getEmptyPerson();

  constructor() { }

}
