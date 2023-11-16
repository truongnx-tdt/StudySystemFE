import { Component } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-laptop-category',
  templateUrl: './laptop-category.component.html',
  styleUrls: ['./laptop-category.component.css']
})
export class LaptopCategoryComponent {
  allItems: any;
  titleCategory: any;
  constructor(private serviceProduct: LaptopService, private route: ActivatedRoute, private bcService: BreadcrumbService) {

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
        this.allItems = products.filter((product: any) => product.priceSell ? product.priceSell > 5000000 : product.price > 5000000)
        this.titleCategory = 'Laptop trên 100 triệu'
        this.bcService.set('@laptop', 'Laptop');
        this.bcService.set('@filterType', "Trên 100 triệu");
      });
    } else {
      this.serviceProduct.getProductsByBrand(id).subscribe(products => {
        this.allItems = products;
        this.titleCategory = id === 'apple' ? 'Macbook' : 'Laptop ' + id;
        this.bcService.set('@laptop', 'laptop');
        this.bcService.set('@filterType', id);
      });
    }
  }
}
