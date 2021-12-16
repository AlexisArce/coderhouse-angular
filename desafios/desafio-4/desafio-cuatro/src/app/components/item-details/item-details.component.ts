import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private router: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  product: any;
  loading = true;

  ngOnInit() {
    let id = this.router.snapshot.url[1].path;
    this.getData(id);
  }

  ngOnDestroy(): void {
    console.log('app-item-details');
  }

  async getData(id: string) {
    this.product = await this._productsService.getItem(id).toPromise();
    this.loading = false;
  }
}
