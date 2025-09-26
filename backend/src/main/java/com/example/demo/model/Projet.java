package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "projet")

public class Projet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "intitule")
    private String intitule;

    @Column(name = "description")
    private String description;

    @Column(name = "taches")
    private String taches;
    
    @Column(name = "technologies")
    private String technologies;

    @Column(name = "domaine")
    private String domaine;
    
    @Column(name = "profile")
    private String profile;
    
    public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public String getDomaine() {
		return domaine;
	}

	public void setDomaine(String domaine) {
		this.domaine = domaine;
	}

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIntitule() {
        return intitule;
    }

    public void setIntitule(String intitule) {
        this.intitule = intitule;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

	public String getTaches() {
		return taches;
	}

	public void setTaches(String taches) {
		this.taches = taches;
	}

	public String getTechnologies() {
		return technologies;
	}

	public void setTechnologies(String technologies) {
		this.technologies = technologies;
	}

}
