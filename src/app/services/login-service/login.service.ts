import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/api/users/email';
  
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username: email, password: password }).pipe(
      tap(response => {
        localStorage.setItem('username', response.userName);
      })
    );
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('username');
  }

  getUsername() {
    return localStorage.getItem('username');
  }
}
