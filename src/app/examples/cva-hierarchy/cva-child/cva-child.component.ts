import { Component, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Person } from 'src/app/models/models';
import { CVA_CHANGE_DETECTION_STRATEGY } from '../cva-hierarchy.module';

interface PersonFormInterface {
  name: FormControl<string | null>,
  surname: FormControl<string | null>,
  age: FormControl<number | null>
}

@Component({
  selector: 'app-cva-child',
  templateUrl: './cva-child.component.html',
  styleUrls: ['./cva-child.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CvaChildComponent,
      multi: true
    },
  ],
  changeDetection: CVA_CHANGE_DETECTION_STRATEGY
})
export class CvaChildComponent implements ControlValueAccessor, OnInit, OnDestroy {
  form: FormGroup<PersonFormInterface>;
  private onChange: any = () => { };

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control<string | null>(null),
      surname: this.formBuilder.control<string | null>(null),
      age: this.formBuilder.control<number | null>(null),
    });
    this.form.valueChanges.subscribe((v) => this.onChange(v));
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
  writeValue(person: Person): void {
    this.form.patchValue(person, { emitEvent: false });
  }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
