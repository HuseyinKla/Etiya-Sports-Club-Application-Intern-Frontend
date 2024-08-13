import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Users{
  username: String,
  name: String,
  email: String
}


@Injectable({
  providedIn: 'root'
})
export class WithoutPurchaseService {

  private apiUrl = 'http://localhost:8080/api/users/withoutPurchases';

  
  constructor(private http: HttpClient) { }

  getUsersDontHaveBundle(): Observable<any> {
    return this.http.get<Users[]>(this.apiUrl)
  }}
