package com.skilldistillery.job.services;

import java.util.List;

import com.skilldistillery.job.entities.User;



public interface UserService {

	List<User> findAllUsers();
	
	User findByUserId(Integer id);
	
	User createUser(User user);
	
	User updateUserById(Integer id, User user);
	
	Boolean deleteUserById(Integer id); 
}
