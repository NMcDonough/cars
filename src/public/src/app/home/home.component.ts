import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  randomCar: any;
  logged: any;

  constructor(private cs: CarService){}

  ngOnInit(){
    this.findRandomCar();
    this.logged = false;
  }

  findRandomCar(){
    this.cs.allCars().subscribe(data => {
      this.randomCar = data[Math.floor(Math.random() * data.length)];
    })
  }
}
