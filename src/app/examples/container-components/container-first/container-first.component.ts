import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../logger/logger.service';

@Component({
  selector: 'app-stateful-first',
  templateUrl: './container-first.component.html',
  styleUrls: ['./container-first.component.scss']
})
export class ContainerFirstComponent implements OnInit {

  constructor(
    private logger: LoggerService
  ) { }

  ngOnInit(): void {
  }
}
