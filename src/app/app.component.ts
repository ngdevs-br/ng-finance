import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-root', // eslint-disable-line
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  authService = inject(AuthService);
  title = 'ng-pessoal-finance';
}
