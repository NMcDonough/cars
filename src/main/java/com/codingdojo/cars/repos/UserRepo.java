package com.codingdojo.cars.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.codingdojo.cars.models.User;

@RepositoryRestResource
@CrossOrigin(origins="http://localhost:4200")
public interface UserRepo extends JpaRepository<User, Long>{
	User findByEmail(String search);
}
