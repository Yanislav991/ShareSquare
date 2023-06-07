import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
    MatFormFieldModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerFormData = this.formBuild.group({
    email: ['', Validators.email, Validators.required],
    password: ['', Validators.minLength(4), Validators.required]
  });

  constructor(private formBuild: FormBuilder) {}

  // onSubmit() {
  //   console.log(this.registerFormData.value);
  // }
}
