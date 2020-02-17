import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  //endpoint = 'http://df25ab4c.ngrok.io/site/';
  endpoint = 'http://locationtracker/site/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getCoords(): Observable<any> {
    return this.http.get(this.endpoint + 'get-coords').pipe(
      map(this.extractData));
  }
  getUsers(): Observable<any> {
    return this.http.get(this.endpoint + 'get-users').pipe(
        map(this.extractData));
  }
  getUserCoords(user_id): Observable<any> {
    return this.http.get(this.endpoint + 'get-archive?userid='+user_id).pipe(
        map(this.extractData));
  }
}
