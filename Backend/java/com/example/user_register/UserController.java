package com.example.user_register;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/register")
	   public ResponseEntity<?> registerUser(@RequestBody User user) {
		
		try {
		  // Check if the email already exists
        if (userRepository.existsByEmail(user.getEmail())) {
        	 return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists!");
        }
        
        // Save the user to the database
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.OK).body("User registered successfully!");
		}
		catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                .body("Registration failed: " + e.getMessage()); // Error response
	    }
		}
        
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User user) {
	    Optional<User> dbUser = userRepository.findByEmail(user.getEmail());
	    
	    if (dbUser.isPresent() && dbUser.get().getPassword().equals(user.getPassword())) {
	    	Map<String, String> response = new HashMap<>();
	        response.put("message", "Login successful");
	        response.put("name", dbUser.get().getName()); // Assuming `name` is a field in your `User` entity
	        return ResponseEntity.ok(response);
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
	    }
	}

    }

