package com.skilldistillery.job.controller;

import java.security.Principal;
import java.util.List;
import java.util.Set;

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

import com.skilldistillery.job.entities.Application;
import com.skilldistillery.job.services.ApplicationService;
import com.skilldistillery.job.services.UserService;

@CrossOrigin({"*", "http://localhost:4208"})
@RestController
@RequestMapping("api")
public class ApplicationController {
	
	@Autowired
	private ApplicationService applSvc;
	
	
	@Autowired
	private UserService userSvc;
	
	@GetMapping("good")
	public String ping() {
		return "test";
	}
	
	@GetMapping("applied")
	public List<Application> findAllAppl(){
		return applSvc.findAllAppl();
	}
	
	@GetMapping("applied/{id}")
	public Application findByApplicationById(@PathVariable("id") Integer userId,
			HttpServletResponse response){
		try {
			Application appl = applSvc.findByApplicationById(userId);
			if(appl == null) {
				response.setStatus(404);
			}
			return appl;
		}catch(Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			return null;
		}
		
	}
	
	
	/////////CREATE APPLICATION ON USER/////////////http://localhost:8083/api/applied/1
	@PostMapping("applied/{id}")
	public Application createApplication(@PathVariable Integer id,
			@RequestBody Application appl,
			HttpServletResponse response,
			HttpServletRequest request,
			Principal principal){
		try {
//			appl = applSvc.createApplicationOnUser(id, appl);
			appl = applSvc.createApplicationOnUser(principal.getName(), appl);
			if (appl == null) {
				response.setStatus(404);
			}else {
			
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(appl.getId());
			response.setHeader("Location", url.toString());
			
			}
		}catch(Exception e) {
			response.setStatus(404);
			e.printStackTrace();
			appl = null;
		}
		return appl;
	}
	
	////////////////UPDATE APPLICATION ON USER////////////////
	@PutMapping("{uId}/applied/{appId}")
	public Application updateApplicationOnUser(@PathVariable("uId") Integer userId,
			@PathVariable("appId") Integer applId,
			@RequestBody Application appl,
//			@RequestBody User user,
			HttpServletResponse response,
			HttpServletRequest request) {
		try {
			appl = applSvc.updateApplicationOnUser(userId, applId, appl);
			if(appl == null) {
				response.setStatus(404);
			}
		}catch(Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			appl = null;
		}
		
		return appl;
	}
	
	/////////DELETE APPLICATIONS ON USER////////////
	@DeleteMapping("{uId}/applied/{appId}")
	public void deleteApplicationOnUser(@PathVariable("uId") Integer userId,
			@PathVariable("appId") Integer applId, 
			HttpServletRequest request,
			HttpServletResponse response) {
		try {
			
			applSvc.deleteApplicationOnUser(userId, applId); 
			response.setStatus(204);
		} catch(Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
		
	}
	
//	@GetMapping("applied")
//	public Set<Application> index(
//			HttpServletRequest request,
//			HttpServletResponse respoonse,
//			Principal principal){
//		return applSvc.index(principal.getName());
//	}
//	
//	
//	
//	
//	@GetMapping("applied/{appId}")
//	public Application show(@PathVariable Integer appId,
//			HttpServletResponse response,
//			HttpServletRequest request,
//			Principal principal) {
//		Application appl = applSvc.show(principal.getName(), appId);
//		try {
//			
//			if(appl == null) {
//				response.setStatus(404);
//			} else {
//				response.setStatus(201);
//			}
//		}catch(Exception e) {
//			e.printStackTrace();
//			response.setStatus(400);
//			appl = null;
//		}
//		return appl;
//		
//		
//	}
	
	
}
