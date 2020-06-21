package com.skilldistillery.job.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.job.entities.Application;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {
	
	List<Application> findByUserId(Integer id);
	
	List<Application> findByTitleContaining(String title);
	
	Application findApplicationById(Integer id);
	
	Application findByIdAndUserUsername(int id, String username);
}
