package com.codingdojo.cars.validators;

import javax.validation.Validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

import com.codingdojo.cars.models.User;
import com.codingdojo.cars.services.UserService;

@Component
public class UserValidator{

	public final UserService us;
	
	public UserValidator(UserService us) {
		this.us = us;
	}
	
	public void validateEmail(Object target, Errors errors) {
		User user = (User) target;
		
		if(this.us.findByEmail(user.getEmail()) != null)
			errors.rejectValue("email", "exists");
	}
}
