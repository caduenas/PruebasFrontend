import { Component } from '@angular/core';
import { MoldeLogin } from '../../intrfaces/users';
import { AsyncPipe } from '@angular/common';
import { UsersService } from '../../core/services/user_services/users.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../core/services/autentificacion/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service: AuthServiceService, private router: Router){}
  moldeLogin: MoldeLogin = {
    email: '',
    password: '',
  }
  errorMessage: string = '';

  login(){
    this.service.loginuser(this.moldeLogin).subscribe(
      (response) =>{
        this.service.setToken(response.token);
        this.router.navigate(['Hashing']);
      },
      (error) =>{
        if (error.status === 400) {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }else{
          this.errorMessage = 'Error en el servidor. Inténtelo de nuevo más tarde.';
        }
      }
    )
  }
}
