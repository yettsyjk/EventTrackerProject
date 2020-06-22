package com.skilldistillery.job.services;

import java.util.List;
import java.util.Set;

import com.skilldistillery.job.entities.Application;



public interface ApplicationService {
	
	
	List<Application> findAllAppl();
	
	List<Application> findByUserId(Integer id);
	
	Application createApplicationOnUser(String username, Application appl);
	
	Application updateApplicationOnUser(Integer userId, Integer applId, Application appl );

	Application deleteApplicationOnUser(Integer userId, Integer applId );
	
	Application findByApplicationById(Integer userId);
	
	List<Application> findByTitleContaining(String title);
	
	Application show(String username, int appId);
	
	Set<Application> index(String username);
}
