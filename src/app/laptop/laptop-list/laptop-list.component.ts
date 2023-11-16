import { Component } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent {
  allItems: any;
  categoryId: any;
  titleCategory = 'Laptop';
  constructor(private serviceProduct: LaptopService, private route: ActivatedRoute, private bcService: BreadcrumbService
  ) {


  }
  ngOnInit() {
    this.getProductsForCategory();


  }

  // getProduct
  getProductsForCategory() {
    this.serviceProduct.getProductsByCategory().subscribe(products => {
      this.allItems = products;
      this.bcService.set('@laptop', 'Laptop');
    });
  }


}
