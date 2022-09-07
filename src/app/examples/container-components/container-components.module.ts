import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
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
    SharedModule
  ],
  exports: [
    ContainerComponentsExampleComponent
  ]
})
export class ContainerComponentsModule { }
