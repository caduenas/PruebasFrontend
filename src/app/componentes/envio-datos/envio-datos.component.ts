import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, materialize } from 'rxjs';
import { MatrizDatos } from '../../intrfaces/datos';
import { CadenasService } from '../../core/services/cadenas.service';
import { FormControl, FormsModule } from '@angular/forms';
import { MoldeUsers } from '../../intrfaces/users';
import { UsersService } from '../../core/services/user_services/users.service';

@Component({
  selector: 'app-envio-datos',
  standalone: true,
  imports: [AsyncPipe,FormsModule],
  templateUrl: './envio-datos.component.html',
  styleUrl: './envio-datos.component.css'
})
export class EnvioDatosComponent{
  public cadenaSent$!: Observable<MoldeUsers>;
  constructor(private service: UsersService){}
  datos: MoldeUsers = {
    name: '',
    password: ''
  }
  enviarDatos(){
    console.log("entra");
    this.service.createuser(this.datos).subscribe(
      (Response) => {
        console.log('Respuesta del API', Response);
      },
      (error) =>{
        console.error('Error al enviar datos al API', error);
      }
    )

  }

}
