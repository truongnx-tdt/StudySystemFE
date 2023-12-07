import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class DienThoaiService {
  filteredProducts: any;

  /**
   *
   */
  constructor() {

  }



  getProductsByCategory(products: any): Observable<any[]> {
    this.filteredProducts = products.filter((product: any) => product.categoryId === 'dien-thoai');
    return of(this.filteredProducts);
  }



  getProductsByBrand(products: any, id: any): Observable<any[]> {
    const filteredProducts = products.filter((product: any) => product.brandId === id);
    return of(filteredProducts);
  }

}
