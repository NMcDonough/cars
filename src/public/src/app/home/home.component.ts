import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  randomCar: any;
  logged: any;
  @Input()
  user: any;

  constructor(private cs: CarService, private us: UserService){}

  ngOnInit(){
    this.findRandomCar();
    this.logged = this.us.logged;
  }

  findRandomCar(){
    this.cs.allCars().subscribe(data => {
      this.randomCar = data[Math.floor(Math.random() * data.length)];
    })
  }

  updateUser(): void {
    this.user = this.us.user;
    this.logged = this.us.logged;
  }
}
