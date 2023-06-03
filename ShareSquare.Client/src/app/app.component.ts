import { ApplicationRef, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShareSquare.Client';
}
