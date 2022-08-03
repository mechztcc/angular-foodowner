import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Auth } from "../types/auth.interface";
import { Login } from "../types/login.interface";
import { User } from "../types/user.interface";

const api = environment.api_foodowner;
const url = `${api}`;

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  createAccount(user: User): Observable<User> {
    return this.http.post<User>(`${url}/users`, user);
  }

  login(login: Login): Observable<Auth> {
    return this.http.post<Auth>(`${url}/auth`, login);
  }
}
