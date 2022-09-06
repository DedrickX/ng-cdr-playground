import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CvaHierarchyExampleComponent } from './cva-hierarchy-example/cva-hierarchy-example.component';

@NgModule({
  declarations: [
    CvaHierarchyExampleComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CvaHierarchyExampleComponent
  ]
})
export class CvaHierarchyModule { }
