package com.skilldistillery.job.controller;

import java.util.List;
import java.util.Optional;

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

import com.skilldistillery.job.entities.Application;
import com.skilldistillery.job.services.ApplicationService;

@RestController
@RequestMapping("api")
public class ApplicationController {
	
	@Autowired
	private ApplicationService applSvc;
	
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
			HttpServletRequest request){
		try {
			appl = applSvc.createApplicationOnUser(id, appl);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(appl.getId());
			response.setHeader("Location", url.toString());
		}catch(Exception e) {
			response.setStatus(404);
			appl = null;
			e.printStackTrace();
		}
		return appl;
	}
	
	////////////////UPDATE APPLICATION ON USER////////////////
	@PutMapping("{uId}/applied/{appId}")
	public Application updateApplicationOnUser(@PathVariable("uId") Integer userId,
			@PathVariable("appId") Integer applId,
			@RequestBody Application appl,
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
	
	
}
