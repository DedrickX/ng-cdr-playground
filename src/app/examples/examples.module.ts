import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponentsModule } from './container-components/container-components.module';
import { HierarchyModule } from './hierarchy/hierarchy.module';
import { IntroModule } from './intro/intro.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { PresentationComponentsModule } from './presentation-components/presentation-components.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NotFoundComponent,
    HierarchyModule,
    ContainerComponentsModule,
    PresentationComponentsModule,
    IntroModule,
  ]
})
export class ExamplesModule { }
