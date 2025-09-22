package com.example.user_register;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public String registerUser(User user) {
		
		   if (userRepository.existsByEmail(user.getEmail())) {
	            return "User already exists"; 
	        }
		   
	        userRepository.save(user);
	        return "User registered successfully";
	    }
	}


