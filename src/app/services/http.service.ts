import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      'https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE'
    );
  }
}
