import { ChangeDetectionStrategy, Component } from '@angular/core';
import { createPerson, getEmptyPerson, Person } from '../../../models/models';

@Component({
  selector: 'app-container-default',
  templateUrl: './container-default.component.html',
  styleUrls: ['./container-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ContainerDefaultComponent {

  state: Person = getEmptyPerson();

  constructor() { }

  setState(index: number) {
    this.state = createPerson(index)
  }

  setStateDelayed(index: number) {
    setTimeout(() => this.state = createPerson(index), 500);
  }
}
