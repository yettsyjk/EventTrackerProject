package com.skilldistillery.job.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

@Entity
public class Application {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title;
	
	@Column(name="company_name")
	private String companyName;
	
	@Column(name="apply_date")
	private LocalDateTime applyDate;
	
	@Column(name="create_date")
	private LocalDateTime createDate;
	
	private String description;
	
	@Column(name="contact_name")
	private String contactName;
	
	
	private String state;
	private String city;
	
	@NotNull
	@Column(name="zip_code")
	private String zipCode;
	
	@NotNull
	private boolean enabled;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
////////////////////
	
	public Application() {
		super();
	}

	public Application(int id, String title, String companyName, LocalDateTime applyDate, LocalDateTime createDate,
			String description, String contactName, String state, String city, String zipCode, boolean enabled) {
		super();
		this.id = id;
		this.title = title;
		this.companyName = companyName;
		this.applyDate = applyDate;
		this.createDate = createDate;
		this.description = description;
		this.contactName = contactName;
		this.state = state;
		this.city = city;
		this.zipCode = zipCode;
		this.enabled = enabled;
	}

	public Application(int id, String title, String companyName, LocalDateTime applyDate, LocalDateTime createDate,
			String description, String contactName, String state, String city, String zipCode, boolean enabled,
			User user) {
		super();
		this.id = id;
		this.title = title;
		this.companyName = companyName;
		this.applyDate = applyDate;
		this.createDate = createDate;
		this.description = description;
		this.contactName = contactName;
		this.state = state;
		this.city = city;
		this.zipCode = zipCode;
		this.enabled = enabled;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public LocalDateTime getApplyDate() {
		return applyDate;
	}

	public void setApplyDate(LocalDateTime applyDate) {
		this.applyDate = applyDate;
	}

	public LocalDateTime getCreateDate() {
		return createDate;
	}

	public void setCreateDate(LocalDateTime createDate) {
		this.createDate = createDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getContactName() {
		return contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Application [id=" + id + ", title=" + title + ", companyName=" + companyName + ", applyDate="
				+ applyDate + ", createDate=" + createDate + ", description=" + description + ", contactName="
				+ contactName + ", state=" + state + ", city=" + city + ", zipCode=" + zipCode + ", enabled=" + enabled
				+ "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Application other = (Application) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
	
	
	
	
	
	
}
