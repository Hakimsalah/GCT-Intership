package com.example.demo.dto;

import com.example.demo.model.Evaluation;
import com.example.demo.model.Stage;

import java.util.List;

public class StageEvaluationsResponse {

    private Stage stage;
    private List<Evaluation> evaluations;

    public StageEvaluationsResponse() {}

    public StageEvaluationsResponse(Stage stage, List<Evaluation> evaluations) {
        this.stage = stage;
        this.evaluations = evaluations;
    }

    // Getters and Setters
    public Stage getStage() {
        return stage;
    }

    public void setStage(Stage stage) {
        this.stage = stage;
    }

    public List<Evaluation> getEvaluations() {
        return evaluations;
    }

    public void setEvaluations(List<Evaluation> evaluations) {
        this.evaluations = evaluations;
    }
}
