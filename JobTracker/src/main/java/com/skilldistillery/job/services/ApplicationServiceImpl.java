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
	public Application findByApplicationId(Integer id) {
		Application foundApp = applRepo.findApplicationId(id);
		return foundApp;
	}

	@Override
	public List<Application> finalAllApplications() {
		return applRepo.findAll();
	}

	@Override
	public List<Application> findByTitleContaining(String title) {
		return applRepo.findByTitleContaining(title);
	}

	//////////////////CREATE APPLICATION////////////////
	@Override
	public Application createApplication(Integer userId, Application appl) {
		Optional<User> createdUser = userRepo.findById(userId);
		if (createdUser.isPresent()) {
			appl.setUser(createdUser.get());
		}
		return appl;
	}
	
	//////////////////UPDATE APPLICATION////////////////
	@Override
	public Application updateApplication(Integer userId, Integer applId, Application appl) {
		Optional<Application> updatedAppl = applRepo.findById(applId);
		if(updatedAppl.isPresent()) {
			Application updateAnAppl = updatedAppl.get();
			
			updateAnAppl.setTitle(appl.getTitle());
			updateAnAppl.setCompanyName(appl.getCompanyName());
			updateAnAppl.setApplyDate(appl.getApplyDate());
			updateAnAppl.setDescription(appl.getDescription());
			updateAnAppl.setContactName(appl.getContactName());
			updateAnAppl.setState(appl.getState());
			updateAnAppl.setCity(appl.getCity());
			updateAnAppl.setZipCode(appl.getZipCode());
			
			applRepo.saveAndFlush(updateAnAppl);	
		}
		return appl;
	}

	@Override
	public Application deleteApplication(Integer userId, Integer applId) {
		applRepo.deleteById(applId);
		return null;
	}

}
