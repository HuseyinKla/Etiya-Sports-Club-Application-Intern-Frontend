import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface progresses{
  name: String,
  bundleName: String,
  remainingCourseNumber: number
}


@Injectable({
  providedIn: 'root'
})
export class GetAllProgressesService {

  private getProgressesApiUrl = 'http://localhost:8080/api/progresses/active';

  
  constructor(private http: HttpClient) { }

  getProgressActive(): Observable<any> {
    return this.http.get<progresses[]>(this.getProgressesApiUrl)
  }

}
