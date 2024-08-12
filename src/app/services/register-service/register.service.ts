import { Injectable } from '@angular/core';
import { LoginService } from '../login-service/login.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl = "http://localhost:8080/api/users"

  constructor(private loginService: LoginService, private http: HttpClient) { }


  registerUser(registerInfo: any){
    return this.http.post<any>(this.apiUrl, { 
      "name": registerInfo.name, 
      "username": registerInfo.username, 
      "email": registerInfo.email, 
      "password": registerInfo.password,
      "rolename": registerInfo.rolename   
    })
  }


}
