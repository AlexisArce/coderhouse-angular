import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  constructor(private _moviesService: MoviesService) {}

  products: any;

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.products = await this._moviesService.getAll();
  }
}
