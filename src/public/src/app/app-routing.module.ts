import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'car/:id', component: CarComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: "/home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
