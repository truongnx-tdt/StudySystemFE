import { Component } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-tablet-list',
  templateUrl: './tablet-list.component.html',
  styleUrls: ['./tablet-list.component.css']
})
export class TabletListComponent {
  allItems: any;
  categoryId: any;
  titleCategory = 'TABLET';
  constructor(private bcService: BreadcrumbService, private productService: ProductService
  ) {


  }
  ngOnInit() {
    this.getProductsFromApi();
  }
  getProductsFromApi(): void {
    this.productService.getProductByCategoryId('tablet').subscribe(
      (data) => {
        this.allItems = data;
        this.bcService.set('@tablet', 'TABLET');
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
}
