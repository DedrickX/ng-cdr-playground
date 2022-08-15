import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponentsExampleComponent } from './container-components/container-components-example.component';
import { ContainerFirstComponent } from './container-components/container-first/container-first.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IntroComponent } from './intro/intro.component';

const components = [
  NotFoundComponent,
  IntroComponent,
  ContainerComponentsExampleComponent,
  ContainerFirstComponent,
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class ExamplesModule { }
