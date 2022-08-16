import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { createPerson, Person } from '../../../models/models';

@Component({
  selector: 'app-container-default',
  templateUrl: './container-default.component.html',
  styleUrls: ['./container-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ContainerDefaultComponent implements OnInit {

  state: Person = {
    name: '',
    surname: '',
    age: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  setState(index: number) {
    this.state = createPerson(index)
  }

  setStateDelayed(index: number) {
    setTimeout(() => this.state = createPerson(index), 500);
  }
}
