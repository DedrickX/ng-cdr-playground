import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createPerson, getEmptyPerson, Person } from '../../../models/models';
import { CVA_CHANGE_DETECTION_STRATEGY } from '../cva-hierarchy.module';

@Component({
  selector: 'app-cva-parent',
  templateUrl: './cva-parent.component.html',
  styleUrls: ['./cva-parent.component.scss'],
  changeDetection: CVA_CHANGE_DETECTION_STRATEGY
})
export class CvaParentComponent {

  state: FormGroup;

  constructor(
    fb: FormBuilder
  ) {
    this.state = fb.group<Person>(getEmptyPerson())
  }

  setState(index: number) {
    this.state.setValue(createPerson(index));
  }
}
