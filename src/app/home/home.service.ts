
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import '@angular/localize/init';
import { ImgData } from '../Models/img-data';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  baseurl = environment.apiUrl;
  getImgsSupplier(): Observable<any> {
    return this.http.get<any>(this.baseurl + '/api/supplier-img').pipe(
      map(response => response.response.data.imgs.map((imgData: ImgData) => imgData.image))
    );
  }
}
