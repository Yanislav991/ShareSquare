import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [LogoComponent, NavComponent]
})
export class HeaderComponent {}
