import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponentExampleComponent } from './presentation-component-example/presentation-component-example.component';
import { ParentDefaultComponent } from './parent-default/parent-default.component';
import { ChildDefaultComponent } from './child-default/child-default.component';
import { ChildOnPushComponent } from './child-on-push/child-on-push.component';

@NgModule({
  declarations: [
    PresentationComponentExampleComponent,
    ParentDefaultComponent,
    ChildDefaultComponent,
    ChildOnPushComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PresentationComponentExampleComponent
  ]
})
export class PresentationComponentsModule { }
