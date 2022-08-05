import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const api = environment.api_foodowner;
const url = `${api}/addresses`;

@Injectable({
  providedIn: 'root',
})
export class AddressesService {
  constructor(private http: HttpClient) {}

  index(): Observable<any> {
    return this.http.get<any>(`${url}`);
  }
}
