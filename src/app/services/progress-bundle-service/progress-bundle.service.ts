import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login-service/login.service';

interface Progress {
  username: string;
  bundleName: string;
  bundleDescription: string;
  totalLessonNumber: number;
  remainingCourseNumber: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProgressBundleService {

  private apiUrl = 'http://localhost:8080/api/progresses/updateProgressBundle';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  updateProgressBundle(): Observable<any> {
    return this.http.put<Progress[]>(`${this.apiUrl}`, { "username": this.loginService.getUsername()})
  }


}
