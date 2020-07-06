package com.skilldistillery.job.services;

import java.util.List;
import java.util.Set;

import com.skilldistillery.job.entities.Application;



public interface ApplicationService {
	List<Application> findAllAppl();
	List<Application> findByTitleLikeOrCompanyNameLike(String kw);
	
	List<Application> index(String username);
	
	Application show( Integer appId, String username);
	Application createApplicationOnUser(String username, Application appl);	
	Application updateApplicationOnUser(String username, Integer appId, Application appl );
	Boolean disable(Integer appId);
	
}
