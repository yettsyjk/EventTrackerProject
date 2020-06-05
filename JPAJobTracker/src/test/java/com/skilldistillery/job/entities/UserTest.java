package com.skilldistillery.job.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.fail;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class UserTest {
	
	private static EntityManagerFactory emf;
	private static EntityManager em;
	
	private User user;
	

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JobTrackerPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em =emf.createEntityManager();
		
		user = em.find(User.class, 1);
	
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		user = null;
		
	}

//	@Test
//	void test1() {
//		fail("Not yet implemented");
//	}

	@Test
	@DisplayName("User class mapped")
	void test2() {
		assertNotNull(user);
//		assertEquals("Bob", user.getFirstName() );
//		assertEquals("Sall", user.getLastName());
	}
	
}
