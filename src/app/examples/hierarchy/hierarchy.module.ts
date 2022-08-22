import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { HierarchyChildSecondComponent } from './hierarchy-child-second/hierarchy-child-second.component';
import { HierarchyChildComponent } from './hierarchy-child/hierarchy-child.component';
import { HierarchyGrandchildComponent } from './hierarchy-grandchild/hierarchy-grandchild.component';
import { HierarchyParentComponent } from './hierarchy-parent/hierarchy-parent.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { ScanCounterComponent } from './scan-counter/scan-counter.component';

// change this value to view differences in scan counter results
export const HIERARCHY_CHANGE_DETECTION_STRATEGY: ChangeDetectionStrategy = ChangeDetectionStrategy.OnPush;

@NgModule({
  declarations: [
    HierarchyComponent,
    HierarchyParentComponent,
    HierarchyChildComponent,
    HierarchyChildSecondComponent,
    HierarchyGrandchildComponent,
    ScanCounterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HierarchyComponent
  ]
})
export class HierarchyModule { }
