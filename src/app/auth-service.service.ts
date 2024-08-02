import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/test/users/email'; // API URL'inizi buraya ekleyin

  constructor(private http: HttpClient) { }

  login(email: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { "username": email });
  }
}
