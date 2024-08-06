import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Timestamp } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BuyBundleService {



  private apiUrl = 'http://localhost:8080/api/purchases/buy';
  currentTimeStamp: number | undefined;

  constructor(private http: HttpClient) { }

  buyBundle(username: String, bundleId: Number): Observable<any> {

    this.currentTimeStamp = new Date().getTime();
    return this.http.post<any>(this.apiUrl, { "username": username, "bundleId": bundleId, "purchaseDate": this.currentTimeStamp })
  }


}
