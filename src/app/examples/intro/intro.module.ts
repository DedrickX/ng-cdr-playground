import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { IntroParentComponent } from './intro-parent/intro-parent.component';
import { IntroChildComponent } from './intro-child/intro-child.component';
import { IntroChildSecondComponent } from './intro-child-second/intro-child-second.component';
import { IntroGrandchildComponent } from './intro-grandchild/intro-grandchild.component';
import { ScanCounterComponent } from './scan-counter/scan-counter.component';

@NgModule({
  declarations: [
    IntroComponent,
    IntroParentComponent,
    IntroChildComponent,
    IntroChildSecondComponent,
    IntroGrandchildComponent,
    ScanCounterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IntroComponent
  ]
})
export class IntroModule { }
