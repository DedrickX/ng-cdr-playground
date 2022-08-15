import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './examples/not-found/not-found.component';
import {
  StatefulComponentsExampleComponent
} from './examples/stateful-components-example/stateful-components-example.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'stateful' },
  { path: 'stateful', component: StatefulComponentsExampleComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
