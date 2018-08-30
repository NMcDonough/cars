package com.codingdojo.cars.controllers;

import java.util.Collection;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.codingdojo.cars.models.Car;
import com.codingdojo.cars.models.User;
import com.codingdojo.cars.repos.CarRepo;
import com.codingdojo.cars.services.UserService;

@RestController
public class MainController {
	private CarRepo cr;
	private UserService us;
	
	public MainController(CarRepo cr, UserService us) {
		this.cr=cr;
		this.us = us;
	}
	
	//Returns all cars in the database
	@RequestMapping("api/cars/all")
	@CrossOrigin(origins = "http://localhost:4200")
	public Collection<Car> cars(){
		return this.cr.findAll();
	}
	
	//Finds and returns specific car by database ID
	@RequestMapping("api/car/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Optional<Car> findCar(@PathVariable ("id") Long id) {
		return this.cr.findById(id);
	}
	
	//Returns blank user model
	@RequestMapping("api/user/blank")
	@CrossOrigin(origins = "http://localhost:4200")
	public User blankUser(){
		return new User();
	}
	
	@RequestMapping(value="api/user", method=RequestMethod.POST)
	@CrossOrigin(origins="http://localhost:4200")
	public User newUser(@RequestBody User user){
		this.us.createUser(user);
		return user;
	}
}
