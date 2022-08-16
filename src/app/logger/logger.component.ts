import { Component } from '@angular/core';
import { merge, Observable, scan, Subject } from 'rxjs';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent {

  log$: Observable<string>;

  private clear$ = new Subject<void>();

  constructor(
    logger: LoggerService
  ) {
    this.log$ =  merge(
      logger.message$,
      this.clear$.asObservable()
    ).pipe(
      scan((acc, curr) => {
        if (typeof curr === 'string') {
          return acc + '\n' + curr;
        }
        return ''
      }, '')
    );
  }

  onClear() {
    this.clear$.next();
  }
}
