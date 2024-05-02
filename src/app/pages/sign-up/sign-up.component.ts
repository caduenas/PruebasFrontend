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
  errormessage: string= '';

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
  validarRequisitos(){
    if (this.datosNuevo.password === this.repeatpassword) {
      return true;
    }else{
      this.errormessage = 'Las contraseñas no coinciden'
    }
    return false;
  }
}
