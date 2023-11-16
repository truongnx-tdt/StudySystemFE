import { Component } from '@angular/core';
import { TabletService } from '../tablet.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-tablet-list',
  templateUrl: './tablet-list.component.html',
  styleUrls: ['./tablet-list.component.css']
})
export class TabletListComponent {
  allItems: any;
  categoryId: any;
  titleCategory = 'tablet';
  constructor(private serviceProduct: TabletService, private route: ActivatedRoute, private bcService: BreadcrumbService
  ) {


  }
  ngOnInit() {
    this.getProductsForCategory();


  }

  // getProduct
  getProductsForCategory() {
    this.serviceProduct.getProductsByCategory().subscribe(products => {
      this.allItems = products;
      this.bcService.set('@tablet', 'tablet');
    });
  }
}
