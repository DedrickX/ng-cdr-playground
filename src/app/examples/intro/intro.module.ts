import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    IntroComponent,
  ]
})
export class IntroModule { }
