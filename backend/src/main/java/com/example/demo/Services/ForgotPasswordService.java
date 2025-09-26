package com.example.demo.Services;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.EncadrantRepository;
import com.example.demo.model.Encadrant;


@Service
public class ForgotPasswordService {

	private static final long EXPIRE_TOKEN=30;

    @Autowired
    private EncadrantRepository repo;

    public String forgotPass(String email){
        Optional<Encadrant> encadrantOptional = Optional.ofNullable(repo.findByEmail(email));

        if(!encadrantOptional.isPresent()){
            return "Invalid email id.";
        }

        Encadrant encadrant=encadrantOptional.get();
        encadrant.setToken(generateToken());
        encadrant.setTokenCreationDate(LocalDateTime.now());

        encadrant=repo.save(encadrant);
        return encadrant.getToken();
    }

    public String resetPass(String token, String password){
        Optional<Encadrant> encadrantOptional= Optional.ofNullable(repo.findByToken(token));

        if(!encadrantOptional.isPresent()){
            return "Invalid token";
        }
        LocalDateTime tokenCreationDate = encadrantOptional.get().getTokenCreationDate();

        if (isTokenExpired(tokenCreationDate)) {
            return "Token expired.";

        }

        Encadrant encadrant = encadrantOptional.get();

        encadrant.setPassword(password);
        encadrant.setToken(null);
        encadrant.setTokenCreationDate(null);

        repo.save(encadrant);

        return "Your password successfully updated.";
    }

    private String generateToken() {
        StringBuilder token = new StringBuilder();

        return token.append(UUID.randomUUID().toString())
                .append(UUID.randomUUID().toString()).toString();
    }

    private boolean isTokenExpired(final LocalDateTime tokenCreationDate) {

        LocalDateTime now = LocalDateTime.now();
        Duration diff = Duration.between(tokenCreationDate, now);

        return diff.toMinutes() >=EXPIRE_TOKEN;
    }

}
