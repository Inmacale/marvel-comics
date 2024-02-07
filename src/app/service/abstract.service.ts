import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService {

  constructor(protected http: HttpClient) { }

  protected get<T>(path: string, params?: any): Observable<T> {
    return this.http.get<T>(path, { params });
  }
}
