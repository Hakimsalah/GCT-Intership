import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotPasswordService } from '../forgot-password.service';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule ,CommonModule, HttpClientModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email!: string;
  response!: string;

  constructor(private forgotPasswordService: ForgotPasswordService, private router: Router) {}

  onSubmit() {
    if (!this.email) {
      this.response = 'Please enter a valid email';
      return;
    }

    this.forgotPasswordService.forgotPassword(this.email).subscribe(
      response => {
        this.response = response;
        if (!response.startsWith('Invalid')) {
          const token = response.split('token=')[1];
          this.router.navigate(['/reset-password'], { queryParams: { token: token } });
        }else{
          window.alert('E-mail incorrect');
        }
      },
      error => this.response = 'An error occurred'
       
    );
  }
}