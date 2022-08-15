import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  message$: Observable<string>;

  private messageSubject = new Subject<string>();

  constructor() {
    this.message$ = this.messageSubject.asObservable();
  }

  log(text: string) {
    const time = new Date();
    const timestamp = time.getHours().toString().padStart(2, '0') + ':' +
        time.getMinutes().toString().padStart(2, '0') + ':' +
        time.getSeconds().toString().padStart(2, '0') + '.' +
        time.getMilliseconds().toString().padStart(3, '0')
    this.messageSubject.next(timestamp + ' > ' + text);
  }
}
