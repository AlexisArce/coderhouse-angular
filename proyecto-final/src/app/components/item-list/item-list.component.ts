import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  constructor(private _productService: ProductsService) {}

  products: any;

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.products = await this._productService.getAll().toPromise();
  }
}
