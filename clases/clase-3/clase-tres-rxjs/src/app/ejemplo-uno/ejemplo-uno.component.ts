import { Component, OnInit } from '@angular/core';

let count = 0;
document.addEventListener('click', () => console.log(`Click: ${++count} js`));

@Component({
  selector: 'app-ejemplo-uno',
  templateUrl: './ejemplo-uno.component.html',
  styleUrls: ['./ejemplo-uno.component.scss'],
})
export class EjemploUnoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
