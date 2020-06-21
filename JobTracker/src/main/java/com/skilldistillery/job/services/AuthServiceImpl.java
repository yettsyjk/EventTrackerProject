package com.skilldistillery.job.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skilldistillery.job.entities.User;
import com.skilldistillery.job.repositories.UserRepository;


@Service
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PasswordEncoder encoder;//field of encoder

	@Override
	public User register(User user) {
		String encodedPW = encoder.encode(user.getPassword());

		user.setPassword(encodedPW);
		user.setEnabled(true);
		
		user.setRole("standard");
		userRepo.saveAndFlush(user); 
		
		
		return user;
	}

}
