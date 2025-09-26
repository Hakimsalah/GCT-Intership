package com.example.demo.Services;

import com.example.demo.model.Evaluation;
import com.example.demo.Repository.EvaluationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EvaluationService {

    @Autowired
    private EvaluationRepository evaluationRepository;

    public List<Evaluation> getEvaluations() {
        return evaluationRepository.findAll();
    }

    public Evaluation getEvaluationById(Long id) {
        return evaluationRepository.findById(id).orElse(null);
    }

    public List<Evaluation> getEvaluationsByStageId(Long stageId) {
        return evaluationRepository.findByStageId(stageId);
    }

    public Evaluation updateEvaluation(Long id, Evaluation evaluationDetails) {
        Evaluation evaluation = evaluationRepository.findById(id).orElse(null);
        if (evaluation != null) {
            evaluation.setStatut(evaluationDetails.getStatut());
            evaluation.setTache_realise(evaluationDetails.getTache_realise());
            evaluation.setProgression(evaluationDetails.getProgression());
            return evaluationRepository.save(evaluation);
        }
        return null;
    }

    public void deleteEvaluation(Long id) {
        evaluationRepository.deleteById(id);
    }
}
