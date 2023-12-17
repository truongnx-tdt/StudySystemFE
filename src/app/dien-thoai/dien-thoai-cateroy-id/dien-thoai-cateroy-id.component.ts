
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-dien-thoai-cateroy-id',
  templateUrl: './dien-thoai-cateroy-id.component.html',
  styleUrls: ['./dien-thoai-cateroy-id.component.css']
})
export class DienThoaiCateroyIdComponent {
  allItems: any;
  titleCategory: any;
  constructor(private productService: ProductService, private route: ActivatedRoute, private bcService: BreadcrumbService) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
     this.getProductsFromApi()
    });
  }


  getProductsFromApi(): void {
    this.productService.getProductByCategoryId('dien-thoai').subscribe(
      (data) => {
        this.allItems = data
        this.bcService.set('@dienThoai', 'Điện thoại');
        this.getProductsForCategory()
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  getProductsForCategory() {
    if (this.allItems) {
      const id = this.route.snapshot.paramMap.get('id') as string;
      if (id === 'filter-price-13') {
        this.allItems = this.allItems.filter((product: any) => product.productSell ? product.productSell > 5000000 : product.productPrice > 5000000)
        this.titleCategory = 'Điện thoại trên 100 triệu'
        this.bcService.set('@dienThoai', 'Điện thoại');
        this.bcService.set('@filterType', "Trên 100 triệu");

      } else {
        this.allItems = this.allItems.filter((product: any) => product.productBrand === id);
        this.titleCategory = id === 'apple' ? 'Điện thoại iphone' : 'Điện thoại ' + id;
        this.bcService.set('@dienThoai', 'Điện thoại');
        this.bcService.set('@filterType', id);
      }
    } else {
      console.log('error')
    }
  }
}
