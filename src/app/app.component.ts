import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthServiceService } from './core/services/autentificacion/auth-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  constructor(private authService: AuthServiceService, private router: Router){}
  isLoggedIn(): boolean {
    // Fetch the login status from AuthServiceService
    return this.authService.isLoggedIn();
  }

  onClick(): void {
    // Handle button click event
    console.log(this.authService.isLoggedIn());
  }
  logout(){
    this.authService.deleteToken()
    console.log(this.authService.getToken)
    this.router.navigate(['']);
  }
}
