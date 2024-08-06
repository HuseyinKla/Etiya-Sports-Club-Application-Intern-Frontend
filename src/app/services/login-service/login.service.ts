import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface userType {
  userId: Number,
  userName: String,
  name: String,
  email: String,
  roleName: String
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/api/users/email';

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  

  constructor(private http: HttpClient) { }


  setUser(user: String){
    this.userSubject.next(user);
  }

  clearUser(){
    this.userSubject.next(null);
  }


  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { "username": email, "password": password });
  }
}
