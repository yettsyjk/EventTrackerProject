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

	@Autowired
	ApplicationRepository appliRepo;
	
	////////trying to config User
	@Autowired
	private PasswordEncoder encoder;

	@Override
	public List<User> findAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public User findByUserId(Integer id) {
		Optional<User> user = userRepo.findById(id);
		if (user.isPresent()) {
			user.get();
		}
		return user.get();
	}

	@Override
	public User createUser(User user) {
		if (user != null) {
			User createdUser = userRepo.saveAndFlush(user);
		}
		return user;
	}

	@Override
	public User updateUserById(Integer id, User user) {
		Optional<User> updatedUser = userRepo.findById(id);
		if (updatedUser.isPresent()) {
			User updateUser = updatedUser.get();
			updateUser.setFirstName(user.getFirstName());

			updateUser.setLastName(user.getLastName());

			updateUser.setEmail(user.getEmail());

			updateUser.setUsername(user.getUsername());
			updateUser.setPassword(user.getPassword());

			userRepo.saveAndFlush(updateUser);

		}
		return user;
	}

	@Override
	public boolean deleteUserById(Integer id) {

		Optional<User> existingUser = userRepo.findById(id);
		if (existingUser.isPresent() && existingUser.get().isEnabled() == true) {
			userRepo.deleteById(id);
			return true;
		} else {
			return false;
		}
	}

	
	///////////register while in Angular///////
	@Override
	public User register(String userJson){
	  ObjectMapper mapper = new ObjectMapper();
	  User user = null;
	  try{
		  user = mapper.readValue(userJson, User.class);
	    String passwordEncode = encoder.encode(user.getPassword());
	    user.setPassword(passwordEncode);
	    
	    userRepo.saveAndFlush(user);
	  }
	  catch(Exception e){
	    e.printStackTrace();
	  }
	  return user;
	}

	@Override
	public User show(String username, String principalUsername) {
		User user = userRepo.findByUsername(username);
		return userRepo.findByIdAndUsername(user.getId(), user.getUsername());
	}
}
