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

	@Test
	@DisplayName("user not null")
	void test1() {
		assertNotNull(user);
	}

	@Test
	@DisplayName("User class mapped")
	void test2() {
		assertNotNull(user);
		assertEquals("Bob", user.getFirstName() );
		assertEquals("Sall", user.getLastName());
	}
	
}
//SELECT u.id, a.id FROM user u JOIN application a WHERE u.id = 1;

//SELECT u.id, u.first_name, u.last_name, a.id, a.title, a.apply_date 
//FROM user u
//JOIN application a
//WHERE u.id =1;
//+----+------------+-----------+----+---------------------------+------------+
//| id | first_name | last_name | id | title                     | apply_date |
//+----+------------+-----------+----+---------------------------+------------+
//|  1 | Bob        | Sall      |  1 | Software Developer        | 2020-06-04 |
//|  1 | Bob        | Sall      |  2 | Junior Software Developer | 2020-06-04 |
//|  1 | Bob        | Sall      |  3 | Software Developer        | 2020-06-04 |
//+----+------------+-----------+----+---------------------------+------------+