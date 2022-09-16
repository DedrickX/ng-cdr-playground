import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CvaHierarchyExampleComponent } from './cva-hierarchy-example/cva-hierarchy-example.component';
import { CvaParentComponent } from './cva-parent/cva-parent.component';

// change this value to view differences
export const CVA_CHANGE_DETECTION_STRATEGY: ChangeDetectionStrategy = ChangeDetectionStrategy.OnPush;

@NgModule({
  declarations: [
    CvaHierarchyExampleComponent,
    CvaParentComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CvaHierarchyExampleComponent,
  ]
})
export class CvaHierarchyModule { }
