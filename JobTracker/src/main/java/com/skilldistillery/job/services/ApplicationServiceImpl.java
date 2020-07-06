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
	public List<Application> findAllAppl() {
		return applRepo.findAll();
	}


	@Override
	public List<Application> index(String username) {
		return applRepo.findByUserUsername(username);
	}

	@Override
	public Application show(Integer appId, String username) {
		return applRepo.findByIdAndUserUsername(appId, username);
	}

	@Override
	public Application createApplicationOnUser(String username, Application appl) {
		User user = userRepo.findByUsername(username);
		if (user != null) {
			appl.setUser(user);
			applRepo.saveAndFlush(appl);
			return appl;
		}
		return null;
	}

	@Override
	public Application updateApplicationOnUser(String username, Integer appId, Application appl) {
		Application managedAppl = applRepo.findByIdAndUserUsername(appId, username);
		if (managedAppl != null) {
			managedAppl.setTitle(appl.getTitle());
			managedAppl.setDescription(appl.getDescription());
			managedAppl.setState(appl.getState());
			managedAppl.setCity(appl.getCity());
			managedAppl.setZipCode(appl.getZipCode());
			applRepo.saveAndFlush(managedAppl);
			return managedAppl;
		}
		return null;
	}

	@Override
	public Boolean disable(Integer appId) {
		Optional<Application> disabledApplication = applRepo.findById(appId);
		if (disabledApplication.isPresent()) {
			disabledApplication.get().setEnabled(false);
			applRepo.saveAndFlush(disabledApplication.get());
			return true;
		} else {

			return false;
		}
	}
	

	@Override
	public List<Application> findByTitleLikeOrCompanyNameLike(String kw) {
		if( kw != null ) {
			kw = "%" + kw + "%";
			return applRepo.findByTitleLikeOrCompanyName(kw, kw);
		}else {
			return null;	
		}
		
	}

}
