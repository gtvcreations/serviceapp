import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Listdataserviceinterface } from './listdataserviceinterface';


@Injectable({
  providedIn: 'root'
})
export class ListdataserviceService {

  public url:string = '/assets/data.json';

  constructor(private _http: HttpClient) { }

  handleError(aErrData) {
    return throwError(aErrData);
  }

  getList():Observable<Listdataserviceinterface[]> {
    return this._http.get<Listdataserviceinterface[]>(this.url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

}
