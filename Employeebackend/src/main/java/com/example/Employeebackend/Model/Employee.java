package com.example.Employeebackend.Model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
public class Employee {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private long id;
	 @NotNull
	 private String firstName;
	 @NotNull
	 private String lastName;
	 @NotNull
	 private String emailId;
	 
	  @ManyToOne(fetch = FetchType.LAZY, optional = false)
      @JoinColumn(name = "demande_id", nullable = false)
      @OnDelete(action = OnDeleteAction.CASCADE)
      @JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")
      @JsonIdentityReference(alwaysAsId=true)
      @JsonProperty("demande_id")
          Demande demande;
	  
	public Demande getDemande() {
		return demande;
	}
	public void setDemande(Demande demande) {
		this.demande = demande;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
}
