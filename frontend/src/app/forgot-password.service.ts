import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {


  private baseUrl = 'http://backend-service:9090';

  constructor(private http: HttpClient) { }

  forgotPassword(email: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/forgot-password?email=${email}`, {}, { responseType: 'text' });
  }

  resetPassword(token: string, password: string): Observable<string> {
    return this.http.put(`${this.baseUrl}/reset-password?token=${token}&password=${password}`, {}, { responseType: 'text' });
  }
}