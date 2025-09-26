package com.example.demo.Services;

import com.example.demo.Repository.EvaluationRepository;
import com.example.demo.Repository.StageRepository;
import com.example.demo.model.Evaluation;
import com.example.demo.model.Stage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StageService {
    @Autowired
    private StageRepository stageRepository;

    @Autowired
    private EvaluationRepository evaluationRepository;

    public List<Stage> getAllStages() {
        return stageRepository.findAll();
    }

    public Stage getStageById(Long id) {
        return stageRepository.findById(id).orElse(null);
    }

    public Stage createStage(Stage stage) {
        Stage savedStage = stageRepository.save(stage);

        // Create and save an Evaluation
        Evaluation evaluation = new Evaluation();
        evaluation.setStage(savedStage);
        evaluation.setStatut("");// Initialisez le statut à une valeur par défaut si nécessaire
        evaluation.setTache_realise("");// Initialisez les tâches réalisées à une valeur par défaut si nécessaire
        evaluation.setProgression(0); // Initialisez la progression à une valeur par défaut si nécessaire
        evaluationRepository.save(evaluation);

        return savedStage;
    }

    public Stage updateStage(Long id, Stage stageDetails) {
        Stage stage = stageRepository.findById(id).orElse(null);
        if (stage != null) {
            stage.setTitre(stageDetails.getTitre());
            stage.setDateDebut(stageDetails.getDateDebut());
            stage.setDateFin(stageDetails.getDateFin());
            stage.setStagiaire(stageDetails.getStagiaire());
            stage.setProjet(stageDetails.getProjet());
            stage.setDescription(stageDetails.getDescription());
            stage.setProfile(stageDetails.getProfile());
            return stageRepository.save(stage);
        }
        return null;
    }

    public Evaluation findByStage(Long stageId) {
        List<Evaluation> evaluations = evaluationRepository.findByStageId(stageId);
        return evaluations.isEmpty() ? null : evaluations.get(0);
    }

    public void deleteStage(Long id) {
        // Supprimer d'abord les évaluations associées
        List<Evaluation> evaluations = evaluationRepository.findByStageId(id);
        for (Evaluation evaluation : evaluations) {
            evaluationRepository.deleteById(evaluation.getId());
        }

        // Supprimer le stage
        stageRepository.deleteById(id);
    }
}
