package com.skilldistillery.job.services;

import java.util.List;
import java.util.Optional;
import java.util.Set;

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
	public Application findByApplicationById(Integer userId) {
		Optional<Application> opAppTracker = applRepo.findById(userId);
//		Application foundApp = applRepo.findApplicationById(userId);
		if(opAppTracker.isPresent()) {
			return opAppTracker.get(); 
		}
		return null;
	}

	@Override
	public List<Application> findAllAppl() {
		return applRepo.findAll();
	}

	@Override
	public List<Application> findByTitleContaining(String title) {
		return applRepo.findByTitleContaining(title);
	}

	//////////////////CREATE APPLICATION////////////////
	@Override
	public Application createApplicationOnUser(String username, Application appl) {
		User createdUser = userRepo.findByUsername(username);
		if (createdUser != null) {
			appl.setUser(createdUser);
			applRepo.saveAndFlush(appl);
			return appl;
		}
		return null;
	}
	
	//////////////////UPDATE APPLICATION////////////////
	@Override
	public Application updateApplicationOnUser(Integer userId, Integer applId, Application appl) {
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

//////////////////DELETE APPLICATION////////////////
	@Override
	public Application deleteApplicationOnUser(Integer userId, Integer applId) {
		applRepo.deleteById(applId);
		return null;
	}
/////////////////USERNAME//////////////
	@Override
	public Application show(String username, int appId) {	
		return applRepo.findByIdAndUserUsername(appId, username);
	}

	////////index set added to repair bug
	@Override
	public Set<Application> index(String username) {
		return applRepo.findByUserUsername(username);
	}

}
