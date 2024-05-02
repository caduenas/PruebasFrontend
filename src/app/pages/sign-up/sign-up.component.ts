import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { MoldeUsers } from '../../intrfaces/users';
import { UsersService } from '../../core/services/user_services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,AsyncPipe],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private service: UsersService , private router: Router ){}
  datosNuevo: MoldeUsers = {
    name: '',
    password: '',
    correo: ''
  }
  repeatpassword: string = '';
  errorMessage: string= '';

  crearUsuario(){
    if(this.validarRequisitos()){
      this.service.createuser(this.datosNuevo).subscribe(
        (Response) => {
          this.router.navigate(['Hashing'])
        },
        (error) =>{
          console.error('Error al enviar datos al API', error);
        }
      )
    }
  }
validarRequisitos() {
    const password = this.datosNuevo.password;
    const repeatPassword = this.repeatpassword;

    // Verificar si las contraseñas coinciden
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
