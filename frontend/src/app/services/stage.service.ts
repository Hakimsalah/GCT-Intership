import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stage } from '../models/stage.model';
import { EvaluationService } from './evaluation.service';
import { Evaluation } from '../models/Evaluation.model';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private baseUrl = 'http://backend-service:9090/api/stages';

  constructor(private http: HttpClient, private evaluationService: EvaluationService) {}

  getStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(`${this.baseUrl}/`);
  }

  postStage(stage: Stage): Observable<Stage> {
    return this.http.post<Stage>(`${this.baseUrl}/`, stage);
  }

  deleteStage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateStage(id: number, stage: Stage): Observable<Stage> {
    return this.http.put<Stage>(`${this.baseUrl}/${id}`, stage);
  }

  
}
