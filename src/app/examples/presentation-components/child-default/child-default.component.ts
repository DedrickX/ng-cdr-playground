import { Component, Input } from '@angular/core';
import { getEmptyPerson, Person } from '../../../models/models';

@Component({
  selector: 'app-child-default',
  templateUrl: './child-default.component.html',
  styleUrls: ['./child-default.component.scss']
})
export class ChildDefaultComponent {

  @Input()
  state: Person = getEmptyPerson();

  constructor() { }

}
