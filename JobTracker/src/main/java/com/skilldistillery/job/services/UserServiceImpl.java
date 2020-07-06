package com.skilldistillery.job.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.skilldistillery.job.entities.User;
import com.skilldistillery.job.repositories.ApplicationRepository;
import com.skilldistillery.job.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	////////trying to config User
	@Autowired
	private PasswordEncoder encoder;

	@Override
	public List<User> findAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public User updateProfile(Integer userId, User user) {
		Optional <User> optUser = userRepo.findById(userId);
		if(optUser.isPresent()) {
			User updatedUser = optUser.get();
			updatedUser.setFirstName(user.getFirstName());
			updatedUser.setLastName(user.getLastName());
			updatedUser.setEmail(user.getEmail());
			return userRepo.saveAndFlush(updatedUser);
		}		
		return null;
	}

	@Override
	public User findById(Integer userId) {
		return userRepo.findById(userId).get();
	}

	@Override
	public User findUserByUsername(String username) {
		return userRepo.findByUsername(username);
	}

	@Override
	public Boolean remove(Integer userId) {
		boolean deleted = false;
		Optional <User> disableUser = userRepo.findById(userId); 
		if(disableUser.isPresent() && disableUser.get().isEnabled() ==  true) {
			disableUser.get().setEnabled(false);
			userRepo.saveAndFlush(disableUser.get());
			deleted = true;
		}
		
		return deleted;
	}

	@Override
	public Boolean enable(Integer userId) {
		boolean enabled = false;
		Optional <User> enableUser = userRepo.findById(userId); 
		if(enableUser.isPresent() && enableUser.get().isEnabled() ==  false) {
			enableUser.get().setEnabled(true);
			userRepo.saveAndFlush(enableUser.get());
			enabled = true;
		}
		
		return enabled;
	}
	
}

	
