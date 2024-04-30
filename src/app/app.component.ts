import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListacadenaComponent } from './pages/listacadena/listacadena.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
