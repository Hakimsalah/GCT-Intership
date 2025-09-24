package com.example.demo.controller;

import com.example.demo.dto.StageEvaluationsResponse;
import com.example.demo.model.Evaluation;
import com.example.demo.model.Stage;
import com.example.demo.Services.EvaluationService;
import com.example.demo.Services.StageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/evaluations")
public class EvaluationController {

    @Autowired
    private EvaluationService evaluationService;

    @Autowired
    private StageService stageService;

    @GetMapping
    public ResponseEntity<List<Evaluation>> getAllEvaluations() {
        List<Evaluation> evaluations = evaluationService.getEvaluations();
        return new ResponseEntity<>(evaluations, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evaluation> getEvaluationById(@PathVariable Long id) {
        Evaluation evaluation = evaluationService.getEvaluationById(id);
        if (evaluation != null) {
            return new ResponseEntity<>(evaluation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/stage/{stageId}")
    public ResponseEntity<StageEvaluationsResponse> getEvaluationsByStageId(@PathVariable Long stageId) {
        Stage stage = stageService.getStageById(stageId);
        if (stage != null) {
            List<Evaluation> evaluations = evaluationService.getEvaluationsByStageId(stageId);
            StageEvaluationsResponse response = new StageEvaluationsResponse(stage, evaluations);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public Evaluation updateEvaluation(@PathVariable Long id, @RequestBody Evaluation evaluationDetails) {
        return evaluationService.updateEvaluation(id, evaluationDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvaluation(@PathVariable Long id) {
        evaluationService.deleteEvaluation(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
