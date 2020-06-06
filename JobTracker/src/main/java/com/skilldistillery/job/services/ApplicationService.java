package com.skilldistillery.job.services;

import java.util.List;

import com.skilldistillery.job.entities.Application;



public interface ApplicationService {
	
	
	List<Application> findAllAppl();
	
	List<Application> findByUserId(Integer id);
	
	Application createApplicationOnUser(Integer id, Application appl);
	
	Application updateApplication(Integer userId, Integer applId, Application appl );

	Application deleteApplication(Integer userId, Integer applId );
	
	Application findByApplicationById(Integer userId);
	
	List<Application> findByTitleContaining(String title);
}
