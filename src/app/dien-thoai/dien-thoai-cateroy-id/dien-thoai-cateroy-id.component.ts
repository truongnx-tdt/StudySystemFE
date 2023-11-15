import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { DienThoaiService } from '../dien-thoai.service';
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
  filteredProducts: any;
  constructor(private serviceProduct: DienThoaiService, private route: ActivatedRoute, private bcService: BreadcrumbService, private priceFilterService: ProductService) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProductsForCategory();
    });
  }

  getProductsForCategory() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    if (id === 'filter-price-13') {
      this.serviceProduct.getProductsByCategory().subscribe(products => {
        this.allItems = products;
        this.filteredProducts = this.allItems.filter((product: any) => product.priceSell ? product.priceSell > 5000000 : product.price > 5000000)
        this.titleCategory = 'Điện thoại trên 100 triệu'
        this.bcService.set('@dienThoai', 'Điện thoại');
        this.bcService.set('@filterType', "Trên 100 triệu");
      });
    } else {
      this.serviceProduct.getProductsByBrand(id).subscribe(products => {
        this.allItems = products;
        this.titleCategory = id === 'apple' ? 'Điện thoại iphone' : 'Điện thoại ' + id;
        this.bcService.set('@dienThoai', 'Điện thoại');
        this.bcService.set('@filterType', id);
      });
    }
  }
}
