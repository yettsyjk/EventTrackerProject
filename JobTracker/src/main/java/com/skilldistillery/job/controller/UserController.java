package com.skilldistillery.job.controller;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin({ "*", "http://localhost:4208" })
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
//			Principal principal,
			HttpServletResponse response) {
		try {
			User user = userSvc.findById(id);
			if (user == null) {
				response.setStatus(404);
			}
			return user;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			return null;
		}
	}

	///////// UPDATE USER///////////
	@PutMapping("users/{uId}")
	public User updateUserById(@PathVariable("uId") Integer uId, @RequestBody User user, HttpServletResponse response) {
		try {
			user = userSvc.updateProfile(uId, user);
			if (user == null) {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(400);
			user = null;
			e.printStackTrace();
		}
		return user;
	}

	///////// DELETE USER ////////
	@DeleteMapping("users/{uId}")
	public void deleteUser(@PathVariable("uId") Integer uId, HttpServletResponse response) {
		try {
			if (userSvc.remove(uId)) {
				response.setStatus(204);
			} else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}

	}

	/////////// Enable User/////////
	@GetMapping("users/admin/{uId}")
	public void enableUser(@PathVariable("uId") Integer uId, HttpServletResponse response) {
		System.out.println("uid" + uId);
		try {
			if (userSvc.enable(uId)) {
				response.setStatus(204);
			} else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
	}

	
	@GetMapping("users/username")
	public User findUserByUsername(Principal principal, HttpServletResponse response) {
		try {
			User user = userSvc.findUserByUsername(principal.getName());
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
	
	
}
