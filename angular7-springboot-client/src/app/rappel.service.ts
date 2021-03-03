import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RappelService {

  private baseUrl = 'http://localhost:8080/api/v1/rappels';

  constructor(private http: HttpClient) { }

  getRappel(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRappel(rappel: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, rappel);
  }

  upddateRappel(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRappel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRappelsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
