import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logged:any;
  user:any;

  constructor(private _http: HttpClient, private router: Router) { }

  createUser(newUser) {
    return this._http.post("http://localhost:8080/api/user", newUser);
  }

  getBlankUser(){
    return this._http.get("http://localhost:8080/api/user/blank");
  }

  login(user){
    return this._http.post("http://localhost:8080/login", user);
  }

  loggedIn(user){
    this.user = user;
    this.logged = true;
  }
}