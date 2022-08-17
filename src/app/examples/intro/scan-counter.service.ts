import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, scan } from 'rxjs';

@Injectable()
export class ScanCounterService {

  countSum$: Observable<CounterState>

  private countSubject = new BehaviorSubject<CountedNames | null>(null);

  private ignoreValues = true;

  constructor(
    private zone: NgZone
  ) {
    this.ignoreValuesForAWhile();
    this.countSum$ = this.countSubject.asObservable().pipe(
      scan((acc, curr) => {
        if (curr == null) return this.getEmptyState();
        return {
          ...acc,
          [curr]: acc[curr] + 1
        }
      }, this.getEmptyState())
    );
  }

  count(name: CountedNames) {
    if (this.ignoreValues) return;
    this.countSubject.next(name);
  }

  reset() {
    this.ignoreValuesForAWhile();
    this.countSubject.next(null);
  }

  private getEmptyState(): CounterState {
    return {
      parent: 0,
      child: 0,
      child2: 0,
      grandChild: 0
    };
  }

  private ignoreValuesForAWhile() {
    this.ignoreValues = true;
    this.zone.runOutsideAngular(() => {
      setTimeout(() => this.ignoreValues = false, 300)
    });
  }
}

export interface CounterState {
  parent: number,
  child: number,
  child2: number,
  grandChild: number
}

export type CountedNames = keyof CounterState;
