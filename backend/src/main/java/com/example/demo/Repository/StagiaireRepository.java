package com.example.demo.Repository;

import com.example.demo.model.Stagiaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StagiaireRepository extends JpaRepository<Stagiaire,Long> {
}
