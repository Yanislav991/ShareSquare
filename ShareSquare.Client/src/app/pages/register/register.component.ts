import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterFormComponent } from '@shared/components/register-form/register-form.component';
import { AuthService } from '@shared/services/auth.service';
import { IUser } from '@shared/types';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [HttpClient, AuthService]
})
export class RegisterComponent {
  constructor(private registerService: AuthService, private router: Router) {}

  onSubmitForm(data: IUser) {
    return this.registerService.register(data).subscribe({
      next: data => {
        this.router.navigate(['/login']);
        console.log(data);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }
}
