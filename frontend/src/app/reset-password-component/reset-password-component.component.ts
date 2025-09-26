import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordService } from '../forgot-password.service';

@Component({
  selector: 'app-reset-password-component',
  standalone: true,
  imports:  [FormsModule,CommonModule, HttpClientModule],
  templateUrl: './reset-password-component.component.html',
  styleUrl: './reset-password-component.component.css'
})
export class ResetPasswordComponentComponent {
  password!: string;
  token: string | null;
  response!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private forgotPasswordService: ForgotPasswordService
  ) {
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  onSubmit() {
    if (this.token) {
      this.forgotPasswordService.resetPassword(this.token, this.password).subscribe(
        response => {
          this.response = response;
          if (response === 'Your password successfully updated.') {
            this.router.navigate(['/login']);
          }
        },
        error => this.response = 'An error occurred'
      );
    } else {
      this.response = 'Token is missing';
    }
  }
}