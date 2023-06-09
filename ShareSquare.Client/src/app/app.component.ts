import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpErrorHandlerService } from '@shared/services/http-error-handler.service';
import { MessageService } from '@shared/services/message.service';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  providers: [HttpErrorHandlerService, MessageService]
})
export class AppComponent {
  title = 'ShareSquare.Client';
}
