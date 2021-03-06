package com.skilldistillery.job.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.job.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	User findByIdAndUsername(int userId, String username);
	
	User findByUsername(String username);
}
