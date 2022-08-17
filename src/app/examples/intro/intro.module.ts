import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { IntroChildSecondComponent } from './intro-child-second/intro-child-second.component';
import { IntroChildComponent } from './intro-child/intro-child.component';
import { IntroGrandchildComponent } from './intro-grandchild/intro-grandchild.component';
import { IntroParentComponent } from './intro-parent/intro-parent.component';
import { IntroComponent } from './intro/intro.component';
import { ScanCounterComponent } from './scan-counter/scan-counter.component';

// change this value to view differences in scan counter results
export const INTRO_CHANGE_DETECTION_STRATEGY: ChangeDetectionStrategy = ChangeDetectionStrategy.OnPush;

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
