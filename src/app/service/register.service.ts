import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {

  }

  apiUrl = "https://localhost:7125/api/register-user";

  reisterProcessService(request: any){
    return this.http.post(this.apiUrl,request);
  }

}
