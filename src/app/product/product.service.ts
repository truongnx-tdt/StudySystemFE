import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /**
   *
   */
  constructor(private http: HttpClient) {

  }

  getProductByCategoryId(cId: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/product-by-category?request=' + cId).pipe(
      map((item: any) => item.response.data.listProductDeatails)
    )
  }


  getProduct(): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/get-product').pipe(
      map((item: any) => item.response.data.listProductDeatails)
    )
  }

  getProductDetail(item: any): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/product-details?productId=' + item).pipe(
      map((item: any) => item.response.data)
    )
  }
  getViewedProduct(item: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/viewed-product', item).pipe(
      map((item: any) => item.response.data.listProductDeatails)
    )
  }
}