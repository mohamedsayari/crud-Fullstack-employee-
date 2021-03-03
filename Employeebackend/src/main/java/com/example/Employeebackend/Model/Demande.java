package com.example.Employeebackend.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Demande {
	 @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private long id;
	  @NotNull
	  private String titre;
	  @NotNull
	   private String description;
		@NotNull
		private String debut;
		 @NotNull
		  private String nbjours;
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getTitre() {
			return titre;
		}
		public void setTitre(String titre) {
			this.titre = titre;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getDebut() {
			return debut;
		}
		public void setDebut(String debut) {
			this.debut = debut;
		}
		public String getNbjours() {
			return nbjours;
		}
		public void setNbjours(String nbjours) {
			this.nbjours = nbjours;
		}
		
		 
		 
}
