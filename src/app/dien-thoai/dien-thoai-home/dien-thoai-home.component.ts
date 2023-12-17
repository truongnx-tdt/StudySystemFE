
import { Component } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-dien-thoai-home',
  templateUrl: './dien-thoai-home.component.html',
  styleUrls: ['./dien-thoai-home.component.css']
})
export class DienThoaiHomeComponent {
  allItems: any;
  categoryId: any;
  titleCategory = 'Điện thoại';
  constructor(private bcService: BreadcrumbService, private productService: ProductService
  ) {


  }
  ngOnInit() {
    this.getProductsFromApi();
  }
  getProductsFromApi(): void {
    this.productService.getProductByCategoryId('dien-thoai').subscribe(
      (data) => {
        this.allItems = data;
        this.bcService.set('@dienThoai', 'Điện thoại');
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

}
