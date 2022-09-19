import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cva-hierarchy-example',
  templateUrl: './cva-hierarchy-example.component.html',
  styleUrls: ['./cva-hierarchy-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvaHierarchyExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
