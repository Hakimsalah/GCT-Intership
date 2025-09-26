package com.example.demo.controller;

import com.example.demo.Repository.EncadrantRepository;
import com.example.demo.model.Encadrant;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class EncadrantController {
	 @Autowired
	    private EncadrantRepository encadrantRepository;

	    @PostMapping("/login")
	    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> loginData) {
	        String username = loginData.get("username");
	        String password = loginData.get("password");

	        Encadrant encadrant = encadrantRepository.findByUsername(username);
	        if (encadrant == null || !encadrant.getPassword().equals(password)) {
	            Map<String, String> response = new HashMap<>();
	            response.put("message", "Invalid credentials");
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
	        }
	        Map<String, String> response = new HashMap<>();
	        response.put("message", "Login successful");
	        response.put("role", encadrant.getRole());
	        return ResponseEntity.ok(response);
	    }
	}