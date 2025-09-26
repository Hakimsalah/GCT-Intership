package com.example.demo.Services;

import com.example.demo.Repository.StagiaireRepository;
import com.example.demo.model.Stagiaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StagiaireService {
    @Autowired
    private StagiaireRepository stagiaireRepository;

    public List<Stagiaire> getAllStagiaires() {
        return stagiaireRepository.findAll();
    }

    public Stagiaire getStagiaireById(Long id) {
        return stagiaireRepository.findById(id).orElse(null);
    }

    public Stagiaire createStagiaire(Stagiaire stagiaire) {
        return stagiaireRepository.save(stagiaire);
    }

    public Stagiaire updateStagiaire(Long id, Stagiaire stagiaireDetails) {
        Stagiaire stagiaire = stagiaireRepository.findById(id).orElse(null);
        if (stagiaire != null) {
            stagiaire.setFirstname(stagiaireDetails.getFirstname());
            stagiaire.setLastname(stagiaireDetails.getLastname());
            stagiaire.setId(stagiaireDetails.getId());
            stagiaire.setEmail(stagiaireDetails.getEmail());
            stagiaire.setAdresse(stagiaireDetails.getAdresse());
            stagiaire.setNumTel(stagiaireDetails.getNumTel());
            stagiaire.setEtablissement(stagiaireDetails.getEtablissement());
            stagiaire.setCin(stagiaireDetails.getCin());
            stagiaire.setProfile(stagiaireDetails.getProfile());
            return stagiaireRepository.save(stagiaire);
        }
        return null;
    }

    public void deleteStagiaire(Long id) {
        stagiaireRepository.deleteById(id);
    }
}
