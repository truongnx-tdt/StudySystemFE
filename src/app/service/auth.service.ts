import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpRequest: HttpClient) { }

  apiUrl = environment.apiUrl + "/api/login";

  doLogin(request: any){
    return this.httpRequest.post(this.apiUrl, request);
  }
}
