import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Timestamp } from 'rxjs';

interface Bundles {
  bundleId: number;
  bundleName: string;
  bundleDescription: string;
  bundlePrice: number;
  totalLessonNumber: number;
  purchaseDate: Timestamp<any>;
}


@Injectable({
  providedIn: 'root'
})
export class UsersBundleService {

  private apiUrl = 'http://localhost:8080/api/purchases/myBundles';

  constructor(private http: HttpClient) { }

  getBundlesByUsername(username: String): Observable<any> {
    return this.http.get<Bundles[]>(`${this.apiUrl}/${username}`)
  }}
