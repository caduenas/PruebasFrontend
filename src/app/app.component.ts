import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from './core/services/autentificacion/auth-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isNavbarCollapsed = true;
  isDropdownOpen = false;
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
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
