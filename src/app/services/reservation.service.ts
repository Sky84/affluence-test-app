import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public getIsDateTimeAvailable(dateTime: string) {
    return this.http.get('http://localhost:8080/resource/1337/available?datetime=' + dateTime);
  }
}
