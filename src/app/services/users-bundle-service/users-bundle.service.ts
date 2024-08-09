import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Timestamp } from 'rxjs';


enum ProcessStatus {
  NOT = 'NOT',
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED'
}

interface Bundles {
  bundleId: number;
  bundleName: string;
  bundleDescription: string;
  bundlePrice: number;
  totalLessonNumber: number;
  remainingCourseNumber: number;
  purchaseDate: Timestamp<any>;
  processStatus: ProcessStatus;
}

@Injectable({
  providedIn: 'root'
})
export class UsersBundleService {

  private apiUrl = 'http://localhost:8080/api/purchases/myBundles';

  constructor(private http: HttpClient) { }

  getBundlesByUsername(username: String): Observable<any> {
    return this.http.get<Bundles[]>(`${this.apiUrl}/${username}`)
  }

}
