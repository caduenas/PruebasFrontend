import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { UsersService } from '../../core/services/user_services/users.service';
import { MoldeUsers, ResultUsers } from '../../intrfaces/users'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listacadena',
  standalone: true,
  imports: [FormsModule,AsyncPipe],
  templateUrl: './listacadena.component.html',
  styleUrl: './listacadena.component.css'
})
export class ListacadenaComponent implements OnInit{
  public cadenaResult$!: Observable<ResultUsers>;
  public cadenaSent$!: Observable<MoldeUsers>;
  constructor(private service: UsersService){}

  datosNuevo: MoldeUsers = {
    name: '',
    password: '',
    correo: ''
  }

  datosEdit: MoldeUsers = {
    name: '',
    password: '',
    correo: ''
  }

  UsuarioseleccionadoEdit: string = "";

  UsuarioseleccionadoDelete: string = ""

  ngOnInit(): void {
      this.cadenaResult$ = this.service.getuser();
  }

  cargarDatos(){
    this.cadenaResult$ = this.service.getuser();
    this.datosNuevo.name = '';
    this.datosNuevo.password = '';
    this.datosEdit.name = '';
    this.datosEdit.password = '';
    this.UsuarioseleccionadoEdit = '';
  }

  enviarDatos(){
    this.service.createuser(this.datosNuevo).subscribe(
      (Response) => {
        console.log('Respuesta del API', Response);
        this.cargarDatos();
      },
      (error) =>{
        console.error('Error al enviar datos al API', error);
      }
    )
  }

  actualizardatos(){
    this.service.edituser(parseInt(this.UsuarioseleccionadoEdit),this.datosEdit).subscribe(
      (Response) => {
        console.log('Respuesta del API', Response);
        this.cargarDatos();
      },
      (error) =>{
        console.error('Error al enviar datos al API', error);
      }
    )
  }
  eliminarDatos(){
    this.service.deleteuser(parseInt(this.UsuarioseleccionadoDelete)).subscribe(
      (response) => {
        console.log('Respuesta del API', response);
        this.cargarDatos();
      },
      (error) =>{
        console.error('Error al enviar datos al API', error);
      }
    )
  }
}
