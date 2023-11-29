import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  convertPriceToNumver(price: number): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/price-number?price=' + price).pipe(
      map((words: any) => words.response.data)
    )
  }

}
