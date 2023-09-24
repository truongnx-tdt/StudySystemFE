import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpRequest: HttpClient) { }

  apiUrl = environment.apiUrl + "/api/login";

  apiUrlLogout = environment.apiUrl + "/api/logout";

  doLogin(request: any) {
    return this.httpRequest.post(this.apiUrl, request);
  }

  logout() {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // headers.append("Authorization", "Bearer " + this.getToken());
    const options = {
      headers: new HttpHeaders().append("Authorization", "Bearer " + this.getToken()),
    }
    return this.httpRequest.post(this.apiUrlLogout, {}, options);
  }

  getToken() {
    // Lấy token từ session
    return sessionStorage.getItem("token");
  }

}
