package com.skilldistillery.job.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	

}
