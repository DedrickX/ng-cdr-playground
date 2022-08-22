import { Component, OnInit } from '@angular/core';
import { createPerson } from '../../../models/models';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  exampleState = createPerson(0);

  ngOnInit(): void {
  }

}
