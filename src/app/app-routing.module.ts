import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ContainerComponentsExampleComponent
} from './examples/container-components/container-components-example/container-components-example.component';
import { HierarchyComponent } from './examples/hierarchy/hierarchy/hierarchy.component';
import { IntroComponent } from './examples/intro/intro/intro.component';
import { NotFoundComponent } from './examples/not-found/not-found.component';
import {
  PresentationComponentExampleComponent
} from './examples/presentation-components/presentation-component-example/presentation-component-example.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'intro' },
  { path: 'intro', component: IntroComponent },
  { path: 'container', component: ContainerComponentsExampleComponent },
  { path: 'presentation', component: PresentationComponentExampleComponent },
  { path: 'hierarchy', component: HierarchyComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
