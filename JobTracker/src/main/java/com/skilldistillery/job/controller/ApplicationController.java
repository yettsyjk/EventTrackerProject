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
	
	@GetMapping("personalapplied")
	public List<Application> index(Principal principal){
		return applSvc.index(principal.getName());
	}
	
	@GetMapping("appliedjobs/{aId}")
	public Application show(@PathVariable("aId") Integer aId,
			Principal principal,
			HttpServletResponse response) {
		Application appl = applSvc.show(aId, principal.getName());
		System.out.println(appl);
		if(appl == null) {
			response.setStatus(404);
		}
		return appl;
	}
	
	
	@PostMapping("appliedjobs")
	public Application create(
			@RequestBody Application appl,
			Principal principal,
			HttpServletResponse response,
			HttpServletRequest request) {
		try {
			System.out.println(appl);
			appl = applSvc.createApplicationOnUser(principal.getName(),appl);
			if(appl == null) {
				response.setStatus(404);
			}else {
				response.setStatus(201);
				StringBuffer url = request.getRequestURL();
				url.append("/").append(appl.getId());
				response.setHeader("Location", url.toString());
			}
		}catch(Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			appl = null;
		}
		return appl;
	}
	
	
	@PutMapping("appliedjobs/{aId}")
	public Application update(@PathVariable("aId") Integer aId,
			@RequestBody Application appl, Principal principal,
			HttpServletResponse response,
			HttpServletRequest request) {
		try {
			appl = applSvc.updateApplicationOnUser(principal.getName(), aId, appl);
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
	
	@DeleteMapping("appliedjobs/{aId}")
	public void disable(
			@PathVariable("aId") Integer aId,
			HttpServletResponse response, HttpServletRequest request) {
		try {
			if(applSvc.disable(aId)) {
				response.setStatus(204);
			}else {
				response.setStatus(404);
			}
		}catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
	}
	
	@GetMapping("appliedjobs/search/keyword/{keyword}")
	public List<Application> findByKeyword(@PathVariable("keyword") String keyword){
		return applSvc.findByTitleLikeOrCompanyNameLike(keyword);
	}
	
	
	
}
