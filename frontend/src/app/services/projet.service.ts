import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../models/projet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  baseUrl = 'http://backend-service:9090/api/projets';

  constructor(private http: HttpClient) {}

  getProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.baseUrl}/`);
  }

  postProjet(projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(`${this.baseUrl}/`, projet);
  }

  deleteProjet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateProjet(id: number, projet: Projet): Observable<Projet> {
    return this.http.put<Projet>(`${this.baseUrl}/${id}`, projet);
  }
  
}
