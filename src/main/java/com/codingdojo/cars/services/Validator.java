package com.codingdojo.cars.services;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

import com.codingdojo.cars.models.User;

@Component
public class Validator {

	public final UserService us;
	
	public Validator(UserService us) {
		this.us = us;
	}
	
	public void validateEmail(Object target, Errors errors) {
		User user = (User) target;
		
		if(this.us.findByEmail(user.getEmail()) != null)
			errors.rejectValue("email", "exists");
	}
}
