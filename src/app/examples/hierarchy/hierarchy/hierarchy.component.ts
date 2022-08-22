import { Component } from '@angular/core';
import { ScanCounterService } from '../scan-counter.service';

@Component({
  selector: 'app-intro',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss'],
  providers: [ ScanCounterService ]
})
export class HierarchyComponent {

  constructor() { }

}
