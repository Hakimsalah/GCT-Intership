import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stagiaire } from '../models/stagiaire.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StagiaireService {
  // ✅ URL RELATIVE - sera proxyfiée par Nginx
  baseUrl = '/api/stagiaires';

  constructor(private http: HttpClient) {}

  getStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(this.baseUrl);
  }

  postStagiaire(stagiaire: Stagiaire): Observable<Stagiaire> {
    return this.http.post<Stagiaire>(this.baseUrl, stagiaire);
  }

  deleteStagiaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateStagiaire(id: number, stagiaire: Stagiaire): Observable<Stagiaire> {
    return this.http.put<Stagiaire>(`${this.baseUrl}/${id}`, stagiaire);
  }
}