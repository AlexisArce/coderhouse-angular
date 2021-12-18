import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  product: any;

  constructor() {}

  getImageUrl() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${this.product.poster_path}`;
  }

  ngOnInit(): void {}
}
