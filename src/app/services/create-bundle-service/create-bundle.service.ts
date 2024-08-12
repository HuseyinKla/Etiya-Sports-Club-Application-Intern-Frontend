import { Injectable } from '@angular/core';
import { LoginService } from '../login-service/login.service';
import { HttpClient } from '@angular/common/http';


interface Course {
  courseName: string;
  courseDescription: string;
}

interface Bundle {
  bundleName: string;
  bundleDescription: string;
  bundlePrice: string;
  totalLesson: string;
}

interface apiFormat{
  bundleName: string;
  bundleDescription: string;
  bundlePrice: number;
  totalLessonNumber: number;
  username: string | null;
  courses: Course[]
}


@Injectable({
  providedIn: 'root'
})
export class CreateBundleService {

  apiUrl = "http://localhost:8080/api/bundles"

  constructor(private loginService: LoginService, private http: HttpClient) { }

  transformToApiFormat(bundle: Bundle, courses: Course[]): apiFormat {
    return {
      bundleName: bundle.bundleName,
      bundleDescription: bundle.bundleDescription,
      bundlePrice: parseFloat(bundle.bundlePrice),
      totalLessonNumber: parseInt(bundle.totalLesson),
      username: this.loginService.getUsername(),
      courses: courses.map((course: any) => ({
        courseName: course.courseName,
        courseDescription: course.courseDescription
      }))
    };
  }

  createBundle(bundle: Bundle, courses: Course[]){
    const request = this.transformToApiFormat(bundle, courses);
    return this.http.post<any>(this.apiUrl, { 
      "bundleName": request.bundleName, 
      "bundleDescription": request.bundleDescription, 
      "bundlePrice": request.bundlePrice, 
      "totalLessonNumber": request.totalLessonNumber,
      "username": request.username,
      "courses": request.courses   
    })
  }

  
}
