package com.skilldistillery.job.repositories;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.job.entities.Application;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {
	
	List<Application> findByUserUsername(String username);
	Application findByIdAndUserUsername(Integer aId, String username);
	
	List<Application> findByTitleLikeOrCompanyName(String kw1, String kw2);
	

}
