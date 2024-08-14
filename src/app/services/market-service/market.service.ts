import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login-service/login.service';

interface Bundle {
  bundleId: Number;
  userId: Number;
  name: string;
  bundleName: string;
  bundleDescription: string;
  bundlePrice: Number;
  totalLessonNumber: Number;
}

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private apiUrl = 'http://localhost:8080/api/bundles/allBundles';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getBundles(): Observable<Bundle[]> {

    const username = this.loginService.getUsername();



    return this.http.get<Bundle[]>(`${this.apiUrl}/${username}`);
  }

}
