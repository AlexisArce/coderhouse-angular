import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  getAll() {
    return this._http.get('https://fakestoreapi.com/products');
  }

  getItem(id: string) {
    return this._http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
