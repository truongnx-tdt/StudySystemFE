import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  getProvinces() {
    return this.http.get(`${this.apiUrl}/api/get-provinces`);
  }

  getDistricts(province_code: string) {
    return this.http.get(`${this.apiUrl}/api/get-districts/${province_code}`);
  }

  getWards(district_code: string) {
    return this.http.get(`${this.apiUrl}/api/get-wards/${district_code}`);
  }

}
