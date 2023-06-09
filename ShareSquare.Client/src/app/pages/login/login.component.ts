import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginFormComponent } from '@shared/components/login-form/login-form.component';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent {
  url = 'http://localhost';

  constructor(private auth: AuthService) {}

  onSubmitForm(data: FormGroup) {
    // this.auth.login();
    // this.auth.registerUser(this.url, data);
  }
}
