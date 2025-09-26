package com.example.demo.Repository;

import com.example.demo.model.Encadrant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EncadrantRepository extends JpaRepository<Encadrant, Long> {
    Encadrant findByUsername(String username);
    Encadrant findByEmail(String email);
    Encadrant findByToken(String token);
}
