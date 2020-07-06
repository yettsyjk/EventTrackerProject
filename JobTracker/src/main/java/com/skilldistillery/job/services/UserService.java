package com.skilldistillery.job.services;

import java.util.List;

import com.skilldistillery.job.entities.User;



public interface UserService {

	User updateProfile(Integer userId, User user);
	User findById(Integer iuserId);
	User findUserByUsername(String username);
	List<User> findAllUsers();
	Boolean remove(Integer userId);
	
	Boolean enable(Integer userId); 
	

}
