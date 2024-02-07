import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  constructor(protected rest: RestService) { }

  public getFindAll(path: string, params?: any): Observable<any> {
    return this.rest.getAll(path, params);
  }
}
