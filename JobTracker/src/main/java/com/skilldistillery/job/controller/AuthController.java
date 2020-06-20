package com.skilldistillery.job.controller;

import java.security.Principal;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.job.entities.User;
import com.skilldistillery.job.services.AuthService;

@RestController
@CrossOrigin({"*", "http://localhost:4208"})
public class AuthController {
	
	
	@Autowired
	private AuthService authSvc;
	
	@PostMapping("/register")
	public User register(@RequestBody User user,
			HttpServletResponse response) {
		if (user == null) {
			response.setStatus(400);
		}
		user = authSvc.register(user);
		return user;
	}
	
	@GetMapping("/authenticate")
	public Principal authenticate(Principal principal) {
		return principal;
	}
	
	
	

}
