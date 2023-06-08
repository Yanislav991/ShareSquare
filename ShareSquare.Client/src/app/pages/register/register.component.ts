import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormComponent } from '@shared/components/auth-form/auth-form.component';
import { RegisterService } from '@shared/services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, HttpClientModule, AuthFormComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [HttpClient, RegisterService]
})
export class RegisterComponent {
  url = 'http://localhost:3000';

  constructor(private registerService: RegisterService) {}

  onSubmitForm(data: FormGroup) {
    this.registerService.registerUser(this.url, data);
  }
}
