import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  url = 'http://localhost:3000';
  http!: HttpClient;
  registrationData: FormGroup = this.formBuild.group({
    email: [''],
    password: ['']
  });

  constructor(private formBuild: FormBuilder) {}

  onSubmit() {
    if (this.registrationData.invalid) {
      console.log(this.registrationData);
      return;
    }

    const { email, password } = this.registrationData.value;
    const body = { email, password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post(this.url, body, { headers: headers }).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
}
