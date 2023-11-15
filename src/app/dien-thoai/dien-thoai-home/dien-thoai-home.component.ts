import { Subscription, filter } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { DienThoaiService } from '../dien-thoai.service';

@Component({
  selector: 'app-dien-thoai-home',
  templateUrl: './dien-thoai-home.component.html',
  styleUrls: ['./dien-thoai-home.component.css']
})
export class DienThoaiHomeComponent {
  allItems: any;
  categoryId: any;
  titleCategory = 'Điện thoại';
  constructor(private serviceProduct: DienThoaiService, private route: ActivatedRoute, private bcService: BreadcrumbService
  ) {


  }
  ngOnInit() {
    this.getProductsForCategory();
    

  }
  
  // getProduct
  getProductsForCategory() {
    this.serviceProduct.getProductsByCategory().subscribe(products => {
      this.allItems = products;
      this.bcService.set('@dienThoai', 'Điện thoại');
    });
  }

  
}
