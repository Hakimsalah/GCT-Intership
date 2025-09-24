import { Component, Input } from '@angular/core';
import { Stagiaire } from '../../models/stagiaire.model';
import { Evaluation } from '../../models/Evaluation.model';
import { Stage } from '../../models/stage.model';
import { EvaluationService } from '../../services/evaluation.service';
import { StageService } from '../../services/stage.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from '../../header/header.component';
import { StageComponent } from '../../stage/stage.component';
import { HeaderagentComponent } from "../../headeragent/headeragent.component";

@Component({
  selector: 'app-avanagent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StageComponent, HeaderComponent, RouterLink, NgxPaginationModule, HeaderagentComponent],
  templateUrl: './avanagent.component.html',
  styleUrl: './avanagent.component.css'
})
export class AvanagentComponent {
  stages: Stage[] = [];
  evaluations: { [key: number]: Evaluation } = {}; // Mapping stageId to Evaluation
  page: number = 1;

  constructor(
    private stageService: StageService,
    private evaluationService: EvaluationService
  ) {}

  ngOnInit(): void {
    this.stageService.getStages().subscribe(stages => {
      this.stages = stages;
      this.stages.forEach(stage => {
        this.evaluationService.getEvaluationsByStageId(stage.id).subscribe(response => {
          if (response && Array.isArray(response.evaluations)) {
            response.evaluations.forEach(evaluation => {
              this.evaluations[stage.id] = evaluation; // Map evaluation to stageId
            });
          } else {
            console.error('Expected an array of evaluations, but got:', response);
          }
        });
      });
    });
  }
  
  printThisPage(){
    window.print();
  }

  onStatutChange(event: Event, stageId: number): void {
    const select = event.target as HTMLSelectElement;
    const evaluation = this.evaluations[stageId];
    if (evaluation) {
      evaluation.statut = select.value;
    }
  }

  onTacheChange(event: Event, stageId: number): void {
    const input = event.target as HTMLInputElement;
    const evaluation = this.evaluations[stageId];
    if (evaluation) {
      evaluation.tache_realise = input.value;
    }
  }

  onProgressionChange(event: Event, stageId: number): void {
    const input = event.target as HTMLInputElement;
    const evaluation = this.evaluations[stageId];
    if (evaluation) {
      evaluation.progression = +input.value;
    }
  }

 
}



