import { Component } from '@angular/core';
import { LogoComponent } from '@components/logo/logo.component';
import { NavComponent } from '@components/nav/nav.component';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [LogoComponent, NavComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
