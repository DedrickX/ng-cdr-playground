import { Component } from '@angular/core';
import { ScanCounterService } from '../scan-counter.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  providers: [ ScanCounterService ]
})
export class IntroComponent {

  constructor() { }

}
