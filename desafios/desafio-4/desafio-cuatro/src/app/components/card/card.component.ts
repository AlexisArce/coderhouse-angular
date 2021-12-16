import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input()
  product: any;

  getUrlDetails() {
    return `products/${this.product.id}`;
  }

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('app-card destroyed');
  }
}
