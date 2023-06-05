import { Component } from '@angular/core';
import { LogoComponent } from '@shared/components/logo/logo.component';
import { NavComponent } from '@shared/components/nav/nav.component';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [LogoComponent, NavComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
