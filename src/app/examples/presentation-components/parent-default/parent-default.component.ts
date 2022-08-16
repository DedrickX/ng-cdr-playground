import { Component } from '@angular/core';
import { createPerson, Person } from '../../../models/models';

@Component({
  selector: 'app-parent-default',
  templateUrl: './parent-default.component.html',
  styleUrls: ['./parent-default.component.scss']
})
export class ParentDefaultComponent {

  state: Person = {
    name: '',
    surname: '',
    age: 0
  };

  constructor() { }

  setState(index: number) {
    this.state = createPerson(index)
  }

  setStateDelayed(index: number) {
    setTimeout(() => this.state = createPerson(index), 500);
  }

  mutateAge() {
    this.state.age = this.state.age + 1;
  }

  mutateAgeDelayed() {
    setTimeout(() => this.state.age = this.state.age + 1, 500);
  }
}
