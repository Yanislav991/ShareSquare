import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { IUserData } from '@shared/types';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatIconModule, NgIf],
  providers: [AuthService]
})
export class NavComponent implements OnInit {
  userData: IUserData | null = null;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.isUserLoggedIn();
  }

  isUserLoggedIn() {
    this.authService.getAuthData().subscribe(data => {
      return (this.userData = data);
    });
  }
}
