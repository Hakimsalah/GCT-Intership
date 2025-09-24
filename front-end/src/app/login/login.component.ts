import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthServiceService,private  router : Router) { }

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      console.log(response);
      const userRole = response.role; // Récupérer le rôle depuis la réponse du backend
      if (userRole === 'encadrant') {
        this.router.navigateByUrl('/stagiaire');
      } else if (userRole === 'agent') {
        this.router.navigateByUrl('/sagent');
      }else{
        window.alert("Incorrect Role");
      }
      // Handle successful login (e.g., redirect, store token)
    }, error => {
      window.alert('Login failed');
      // Handle login error
    });
  }
}
