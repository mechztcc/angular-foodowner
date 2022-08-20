import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api = 'localhost:3333/addresses';

@Injectable({
  providedIn: 'root',
})
export class AddressesService {
  constructor(private http: HttpClient) {}

  findAddresByLoggedUser(): Observable<any> {
    return this.http.get<any>(`${api}`);
  }
}
