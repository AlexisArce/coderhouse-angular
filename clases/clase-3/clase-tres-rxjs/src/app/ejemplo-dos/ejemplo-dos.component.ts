import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(scan((count) => count + 1, 0))
  .subscribe((count) => console.log(`Clicks: ${count} rxjs`));

@Component({
  selector: 'app-ejemplo-dos',
  templateUrl: './ejemplo-dos.component.html',
  styleUrls: ['./ejemplo-dos.component.scss'],
})
export class EjemploDosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
