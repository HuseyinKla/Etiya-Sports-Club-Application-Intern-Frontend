import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllLogsService {

  private getLogsApiUrl = 'http://localhost:8080/api/logs';

  
  constructor(private http: HttpClient) { }

  getLogs(): Observable<any> {
    return this.http.get<any>(this.getLogsApiUrl)
  }

}
