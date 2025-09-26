package com.example.demo.Services;

import com.example.demo.Repository.ProjetRepository;
import com.example.demo.model.Projet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjetService {
    @Autowired
    private ProjetRepository projetRepository;

    public List<Projet> getAllProjets() {
        return projetRepository.findAll();
    }

    public Projet getProjetById(Long id) {
        return projetRepository.findById(id).orElse(null);
    }

    public Projet createProjet(Projet projet) {
        return projetRepository.save(projet);
    }

    public Projet updateProjet(Long id, Projet projetDetails) {
        Projet projet = projetRepository.findById(id).orElse(null);
        if (projet != null) {
            projet.setIntitule(projetDetails.getIntitule());
            projet.setDescription(projetDetails.getDescription());
            projet.setTaches(projetDetails.getTaches());
            projet.setTechnologies(projetDetails.getTechnologies());
            projet.setProfile(projetDetails.getProfile());
            projet.setDomaine(projetDetails.getDomaine());  
            return projetRepository.save(projet);
        }
        return null;
    }

    public void deleteProjet(Long id) {
        projetRepository.deleteById(id);
    }
}
