import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../login-service/login.service';

@Injectable({
  providedIn: 'root'
})
export class CreateProgressService {

  private apiUrl = 'http://localhost:8080/api/progresses/initProgress';
  
  constructor(private http: HttpClient, private loginService: LoginService) { }


  createProgress(bundleId: Number, totalLessonNumber: Number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { 
      "username": this.loginService.getUsername(), 
      "bundleId": bundleId, 
      "remainingCourseNumber": totalLessonNumber, 
    })
  }
  

}
