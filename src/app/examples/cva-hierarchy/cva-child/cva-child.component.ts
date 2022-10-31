import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';

import { Person } from 'src/app/models/models';
import { CVA_CHANGE_DETECTION_STRATEGY } from '../cva-hierarchy.module';

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
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    age: new FormControl(0),
  })

  private onChange: any = () => { };

  constructor(
  ) {
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
