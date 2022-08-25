import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvaHierarchyExampleComponent } from './cva-hierarchy-example/cva-hierarchy-example.component';

@NgModule({
  declarations: [
    CvaHierarchyExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CvaHierarchyExampleComponent
  ]
})
export class CvaHierarchyModule { }
