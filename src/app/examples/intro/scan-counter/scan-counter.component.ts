import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState, ScanCounterService } from '../scan-counter.service';

@Component({
  selector: 'app-scan-counter',
  templateUrl: './scan-counter.component.html',
  styleUrls: ['./scan-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScanCounterComponent implements OnInit {

  countSum$: Observable<CounterState>

  constructor(
    private counter: ScanCounterService
  ) {
    this.countSum$ = counter.countSum$
  }

  ngOnInit(): void {
  }

  reset() {
    this.counter.reset();
  }
}
