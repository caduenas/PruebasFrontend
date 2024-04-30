import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { MoldeUsers } from '../../intrfaces/users';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../../core/services/user_services/users.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,AsyncPipe],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  public chainsent$!: Observable<MoldeUsers>;
  constructor(private service: UsersService){}
  datosNuevo: MoldeUsers = {
    name: '',
    password: '',
    correo: ''
  }

  enviarDatos(){
    this.service.createuser(this.datosNuevo).subscribe(
      (Response) => {
        console.log('Respuesta del API', Response);
        this.datosNuevo.correo = ''
        this.datosNuevo.name = ''
        this.datosNuevo.password = ''
      },
      (error) =>{
        console.error('Error al enviar datos al API', error);
      }
    )
  }
}
