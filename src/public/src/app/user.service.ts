import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  createUser(newUser) {
    return this._http.post("http://localhost:8080/api/user", newUser);
  }

  getBlankUser(){
    return this._http.get("http://localhost:8080/api/user/blank");
  }

  login(user){
    return this._http.post("http://localhost:8080/login", user);
  }
}
