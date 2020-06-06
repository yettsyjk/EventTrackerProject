package com.skilldistillery.job.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	public Application findByApplicationById(@PathVariable("id") Integer userId){
		return applSvc.findByApplicationById(userId);
	}
	
	
	/////////CREATE APPLICATION/////////////http://localhost:8083/api/applied/1
	@PostMapping("applied/{id}")
	public Application createApplication(@PathVariable Integer id,@RequestBody Application appl,
			HttpServletResponse response,
			HttpServletRequest request){
		try {
			Application applic = applSvc.createApplicationOnUser(id, appl);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(applic.getId());
			response.setHeader("Location", url.toString());
		}catch(Exception e) {
			response.setStatus(404);
			appl = null;
			e.printStackTrace();
		}
		return appl;
	}
	
	
	
	
}
