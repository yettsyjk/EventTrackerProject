package com.skilldistillery.job.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.job.entities.User;
import com.skilldistillery.job.services.UserService;

@RestController
@RequestMapping("api")
public class UserController {

	@Autowired
	private UserService userSvc;

	@GetMapping("great")
	public String ping() {
		return "test";
	}

	@GetMapping("users")
	public List<User> findAllUsers() {
		return userSvc.findAllUsers();
	}

	@GetMapping("users/{userId}")
	public User findByUserId(@PathVariable("userId") Integer id,
			HttpServletResponse response) {
		try {
			User user = userSvc.findByUserId(id);
			if(user == null) {
				response.setStatus(404);
			}
			return user;
		}catch(Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			return null;
		}
		
	}

	////////////// CREATE USER//////////////
	@PostMapping("users")
	public User createUser(@RequestBody User user, 
			HttpServletResponse response, 
			HttpServletRequest request) {
		User createUser = userSvc.createUser(user);
		if (user != null) {
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(user.getId());
			response.setHeader("Location", url.toString());
			return createUser;
		} else {
			response.setStatus(400);
			createUser = null;

		}
		return user;
	}

	///////// UPDATE USER///////////
	@PutMapping("users/{id}")
	public User updateUserById(@PathVariable Integer id,
			@RequestBody User user, 
			HttpServletResponse response,
			HttpServletRequest request) {
		try {
			user = userSvc.updateUserById(id, user);
			if(user == null ) {
				response.setStatus(404);
			}
		}catch(Exception e) {
			response.setStatus(400);
			user = null;
			e.printStackTrace();
		}
		return user;
	}

	///////// DELETE USER ////////
	@DeleteMapping("users/{id}")
	public void deleteUser(@PathVariable("id") Integer id,
			HttpServletRequest request,
			HttpServletResponse response) {
		try {
			if(userSvc.deleteUserById(id)) {
				response.setStatus(204);
			}else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
	}
}
