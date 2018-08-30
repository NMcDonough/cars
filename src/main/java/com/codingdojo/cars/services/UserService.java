package com.codingdojo.cars.services;

import com.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.codingdojo.cars.models.User;
import com.codingdojo.cars.repos.UserRepo;

@Service
public class UserService {
	private final UserRepo ur;
	
	public UserService(UserRepo ur) {
		this.ur = ur;
	}
	
	public User createUser(User user) {
    	String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashed);
        return ur.save(user);
    }
	
	public User findByEmail(String email) {
		User u = this.ur.findByEmail(email);
		if(u != null)
			return u;
		else
			return null;
	}
}
