package com.skilldistillery.job.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.job.entities.Application;
import com.skilldistillery.job.entities.User;
import com.skilldistillery.job.repositories.ApplicationRepository;
import com.skilldistillery.job.repositories.UserRepository;


@Service
public class ApplicationServiceImpl implements ApplicationService {
	
	@Autowired
	private ApplicationRepository applRepo;
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public List<Application> findByUserId(Integer id) {
		return applRepo.findByUserId(id);
	}

	@Override
	public Application createApplication(Integer userId, Application appl) {
		Optional<User> createdUser = userRepo.findById(userId);
		return null;
	}

	@Override
	public Application updateApplication(Integer userId, Integer applId, Application appl) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Application deleteApplication(Integer userId, Integer applId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Application> findByApplicationId(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Application> finalAllApplications() {
		return applRepo.findAll();
	}

	@Override
	public List<Application> findByTitleContaining(String title) {
		// TODO Auto-generated method stub
		return null;
	}

}
