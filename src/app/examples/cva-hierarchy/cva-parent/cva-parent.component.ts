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
  formBuilder: any;

  constructor(
    private fb: FormBuilder
  ) {
    this.state = fb.group({
      person: this.fb.control<Person | null>(getEmptyPerson())
    });
  }

  setState(index: number) {
    this.state.controls['person'].setValue(createPerson(index));
  }

  setStateDelayed(index: number) {
    setTimeout(() => {
      this.state.controls['person'].setValue(createPerson(index));
    }, 500);
  }

  mutateAge() {
    // first attempt to mutate - not successfull
    // this.state.controls['person'].value.age += 1;

    // second attempt to mutate - not successfull
    // const person = this.state.controls['person'].value;
    // person.age += 1;

    // now third attempt to mutate
    // it is a mutation, (reference didnt change)
    // but still the value in child reacts
    // we see that the explicit setValue call is ok with the mutated object
    // it is logical, we forced the change by explicitly calling the setValue
    const person = this.state.controls['person'].value;
    person.age += 1;
    this.state.controls['person'].setValue(person);
  }
}
