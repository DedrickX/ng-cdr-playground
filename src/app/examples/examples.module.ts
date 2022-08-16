import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponentsModule } from './container-components/container-components.module';
import { IntroModule } from './intro/intro.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NotFoundComponent,
    IntroModule,
    ContainerComponentsModule,
  ]
})
export class ExamplesModule { }
