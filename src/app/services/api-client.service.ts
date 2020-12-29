import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(public http: HttpClient) { }

  public getCurrency(currency: string) {
    return this.http.get<any>('https://api.exchangeratesapi.io/latest?base=' + currency);
  }
}
