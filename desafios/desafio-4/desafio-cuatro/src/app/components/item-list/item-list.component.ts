import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  constructor(private _productsService: ProductsService) {}

  products: any;
  loading = true;

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.products = await this._productsService.getAll().toPromise();
    this.loading = false;
  }
}
