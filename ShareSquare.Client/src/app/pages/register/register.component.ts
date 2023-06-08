import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RegisterService } from '@shared/services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [HttpClient, RegisterService]
})
export class RegisterComponent {
  url = 'http://localhost:3000';

  registrationData: FormGroup = this.formBuild.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private formBuild: FormBuilder,
    private registerService: RegisterService
  ) {}

  get email() {
    return this.registrationData.get('email');
  }

  get password() {
    return this.registrationData.get('password');
  }

  onSubmit() {
    this.registerService.registerUser(this.url, this.registrationData);
  }
}
