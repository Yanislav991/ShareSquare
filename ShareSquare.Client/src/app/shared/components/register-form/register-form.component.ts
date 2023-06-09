import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  @Input() btnText: string = 'btn';
  @Output() formData = new EventEmitter();

  registerFormData: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    username: [null, [Validators.required, Validators.minLength(3)]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  });

  constructor(private formBuilder: FormBuilder) {}

  get email() {
    return this.registerFormData.get('email');
  }

  get password() {
    return this.registerFormData.get('password');
  }

  get username() {
    return this.registerFormData.get('username');
  }

  onSubmit(data: FormData) {
    this.formData.emit(data);
  }
}
