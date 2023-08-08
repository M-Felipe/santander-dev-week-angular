import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = environment.API_URL;
  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
