import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService extends AbstractService {

  apiUrl = "https://gateway.marvel.com//v1/public/comics";
  auth = "?apikey=c53baac1cd1ab5fb3f94abb6db2d2f5f&hash=1496b842f0887ffa2c9f913ed32fb173&ts=1"

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public getAll(path: string, params?: any) {
    return this.get(this.apiUrl + path + this.auth, params)
  }
}
