import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Bundle {
  bundleId: string;
  userId: string;
  name: string;
  bundleName: string;
  bundleDescription: string;
  bundlePrice: number;
  totalLessonNumber: number;
}

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private apiUrl = 'http://localhost:8080/api/bundles';

  constructor(private http: HttpClient) { }

  getBundles(): Observable<Bundle[]> {
    return this.http.get<Bundle[]>(this.apiUrl);
  }

}
