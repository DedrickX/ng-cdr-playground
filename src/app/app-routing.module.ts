import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ContainerComponentsExampleComponent
} from './examples/container-components/container-components-example.component';
import { IntroComponent } from './examples/intro/intro.component';
import { NotFoundComponent } from './examples/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'intro' },
  { path: 'intro', component: IntroComponent },
  { path: 'container', component: ContainerComponentsExampleComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
