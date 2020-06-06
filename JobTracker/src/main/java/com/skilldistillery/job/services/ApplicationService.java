package com.skilldistillery.job.services;

import java.util.List;

import com.skilldistillery.job.entities.Application;



public interface ApplicationService {
	
	List<Application> findByUserId(Integer id);
	
	Application createApplication(Integer userId, Application appl);
	
	Application updateApplication(Integer userId, Integer applId, Application appl );

	Application deleteApplication(Integer userId, Integer applId );
	
	Application findByApplicationId(Integer id);
	List<Application> finalAllApplications();
	List<Application> findByTitleContaining(String title);
}
