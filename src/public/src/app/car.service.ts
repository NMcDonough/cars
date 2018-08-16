import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient){}

  allCars(): Observable<any>{
    return this.http.get("http://localhost:8080/api/cars/all");
  }

  findCar(id){
    return this.http.get("http://localhost:8080/api/car/" + id);
  }

  wikiCar(make, model){
    return this.http.get("http://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&formatversion=2&titles=" + make + " " + model);
  }
}
