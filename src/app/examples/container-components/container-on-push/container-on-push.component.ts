import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { createPerson, Person } from '../../../models/models';

@Component({
  selector: 'app-container-on-push',
  templateUrl: './container-on-push.component.html',
  styleUrls: ['./container-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerOnPushComponent implements OnInit {

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
    setTimeout(() => {
      this.state = createPerson(index);
    }, 500);
  }

}
