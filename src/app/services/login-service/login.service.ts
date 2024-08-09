import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginApiUrl = 'http://localhost:8080/api/users/email';
  private createLogUrl = 'http://localhost:8080/api/logs';


  
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginApiUrl, { username: email, password: password }).pipe(
      tap(response => {
        localStorage.setItem('username', response.userName);
        localStorage.setItem('userRole', response.roleName)
      })
    );
  }

  createLog(action: string){
    return this.http.post<any>(this.createLogUrl, { "username": this.getUsername(), "action": action})
  }


  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('username');
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  getUserRole(){
    return localStorage.getItem('userRole');
  }
}
