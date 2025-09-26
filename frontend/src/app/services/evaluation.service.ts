import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvaluationResponse } from '../models/Response.model';
import { Evaluation } from '../models/Evaluation.model';


@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private baseUrl = 'http://localhost:9090/api/evaluations';

  constructor(private http: HttpClient) {}

  getEvaluationsByStageId(stageId: number): Observable<EvaluationResponse> {
    return this.http.get<EvaluationResponse>(`${this.baseUrl}/stage/${stageId}`);
  }

  updateEvaluation(id: number, evaluation: Evaluation): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, evaluation);
  }
}
