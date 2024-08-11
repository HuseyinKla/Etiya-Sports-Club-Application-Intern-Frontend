import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login-service/login.service';


interface Course {
  courseName: string;
  courseDescription: string;
}

interface Bundle {
  bundleName: string;
  bundleDescription: string;
  bundlePrice: number;
  totalLessonNumber: number;
  courses: Course[];
}




@Injectable({
  providedIn: 'root'
})
export class GetAdminBundlesService {

  private apiUrl = 'http://localhost:8080/api/bundles/adminBundles';
  
  constructor(private http: HttpClient, private loginService: LoginService) { }


  getAllBundles(): Observable<any> {
    return this.http.get<Bundle[]>(`${this.apiUrl}/${this.loginService.getUsername()}`)
  }


}
