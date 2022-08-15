import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatefulComponentsExampleComponent } from './stateful-components-example/stateful-components-example.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StatefulFirstComponent } from './stateful-components-example/stateful-first/stateful-first.component';

const components = [
  NotFoundComponent,
  StatefulComponentsExampleComponent,
  StatefulFirstComponent,
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class ExamplesModule { }
