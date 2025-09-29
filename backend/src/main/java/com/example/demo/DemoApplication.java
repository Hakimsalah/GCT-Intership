package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
    "com.example.demo",
    "com.example.demo.Services",      // Scanner explicitement
    "com.example.demo.Repository",    // Scanner explicitement
    "com.example.demo.controller",
    "com.example.demo.model"
})
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}