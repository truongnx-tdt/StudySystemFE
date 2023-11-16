import { Component } from '@angular/core';
import { TabletListComponent } from '../tablet-list/tablet-list.component';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { TabletService } from '../tablet.service';

@Component({
  selector: 'app-tablet-category',
  templateUrl: './tablet-category.component.html',
  styleUrls: ['./tablet-category.component.css']
})
export class TabletCategoryComponent {
  allItems: any;
  titleCategory: any;
  constructor(private serviceProduct: TabletService, private route: ActivatedRoute, private bcService: BreadcrumbService) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProductsForCategory();
    });
  }

  getProductsForCategory() {
    const id = this.route.snapshot.paramMap.get('id') as string;

    this.serviceProduct.getProductsByBrand(id).subscribe(products => {
      this.allItems = products;
      this.titleCategory = id === 'apple' ? 'Ipad' : id;
      this.bcService.set('@tablet', 'Tablet');
      this.bcService.set('@filterType', id);
    });

  }
}
