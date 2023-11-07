import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmemberService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getToken() {
    // Lấy token từ session
    return sessionStorage.getItem("token");
  }

  getUserById(): Observable<any> {
    const options = {
      headers: new HttpHeaders().append("Authorization", "Bearer " + this.getToken()),
    }
    return this.http.get(this.apiUrl + '/api/get-user-by-id', options).pipe(
      map((data: any) => data.response.data.user)
    );
  }
}
