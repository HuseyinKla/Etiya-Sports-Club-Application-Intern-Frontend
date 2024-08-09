import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Course {
  courseId: string;
  courseName: string;
  courseDescription: string;
}


@Injectable({
  providedIn: 'root'
})
export class BundleModalService {

  private apiUrl = 'http://localhost:8080/api/courses/bundle';

  constructor(private http: HttpClient) { }

  getCoursesByBundleId(bundleId: Number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/${bundleId}`);
  }

}
