import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { MoldeUsers } from '../../intrfaces/users';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../core/services/autentificacion/auth-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,AsyncPipe],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private service: AuthServiceService , private router: Router ){}
  datosNuevo: MoldeUsers = {
    username: '',
    email: '',
    password: '',
  }
  repeatpassword: string = '';
  errorMessage: string= '';

  crearUsuario(){
    if(true){
      this.datosNuevo.username = this.borrarespacio(this.datosNuevo.username)
      this.service.createuser(this.datosNuevo).subscribe(
        (Response) => {
          this.service.setToken(Response.token)
          this.router.navigate(['Hashing'])
        },
        (error) =>{
          if(error.status === 400){
            this.errorMessage = "Los datos registrados son invalidos.";
          }
        }
      )
    }
  }

  borrarespacio(input: string):string{
    const espacios = /\s/g;
    if (espacios.test(input)){
      return input.replace(espacios, '');
    }else{
      return input;
    }
  }


  validarRequisitos() {
    const password = this.datosNuevo.password;
    const repeatPassword = this.repeatpassword;
    // Verificar que las contraseñas coinsiden
    if (password !== repeatPassword) {
        this.errorMessage = 'Las contraseñas no coinciden';
        return false;
    }
    // Verificar la longitud mínima de la contraseña
    if (password.length < 10) {
        this.errorMessage = 'La contraseña debe tener al menos 10 caracteres';
        return false;
    }
    // Verificar si la contraseña contiene al menos una letra mayúscula
    if (!/[A-Z]/.test(password)) {
        this.errorMessage = 'La contraseña debe contener al menos una letra mayúscula';
        return false;
    }
    // Verificar si la contraseña contiene al menos un carácter especial
    if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
        this.errorMessage = 'La contraseña debe contener al menos un carácter especial';
        return false;
    }
    // Si la contraseña cumple con todos los requisitos, retornar true
    return true;
  }
}
