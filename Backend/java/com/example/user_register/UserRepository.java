package com.example.user_register;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
	boolean existsByEmail(String email); // Custom method to check if email exists
	 Optional<User> findByEmail(String email);

}
