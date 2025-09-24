package com.example.demo.controller;

import com.example.demo.Services.StagiaireService;
import com.example.demo.model.Stagiaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stagiaires")
public class StagiaireController {
    @Autowired
    private StagiaireService stagiaireService;

    @GetMapping("/")
    public List<Stagiaire> getAllStagiaires() {
        return stagiaireService.getAllStagiaires();
    }

    @GetMapping("/{id}")
    public Stagiaire getStagiaireById(@PathVariable Long id) {
        return stagiaireService.getStagiaireById(id);
    }

    @PostMapping("/")
    public Stagiaire createStagiaire(@RequestBody Stagiaire stagiaire) {
        return stagiaireService.createStagiaire(stagiaire);
    }

    @PutMapping("/{id}")
    public Stagiaire updateStagiaire(@PathVariable Long id, @RequestBody Stagiaire stagiaireDetails) {
        return stagiaireService.updateStagiaire(id, stagiaireDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteStagiaire(@PathVariable Long id) {
        stagiaireService.deleteStagiaire(id);
    }
}
