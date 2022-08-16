import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ContainerComponentsExampleComponent
} from './container-components-example/container-components-example.component';
import { ContainerDefaultComponent } from './container-default/container-default.component';
import { ContainerOnPushComponent } from './container-on-push/container-on-push.component';

@NgModule({
  declarations: [
    ContainerComponentsExampleComponent,
    ContainerDefaultComponent,
    ContainerOnPushComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerComponentsExampleComponent
  ]
})
export class ContainerComponentsModule { }
