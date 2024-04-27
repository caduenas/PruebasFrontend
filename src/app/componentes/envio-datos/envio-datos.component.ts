import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, materialize } from 'rxjs';
import { MatrizDatos } from '../../intrfaces/datos';
import { CadenasService } from '../../core/services/cadenas.service';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-envio-datos',
  standalone: true,
  imports: [AsyncPipe,FormsModule],
  templateUrl: './envio-datos.component.html',
  styleUrl: './envio-datos.component.css'
})
export class EnvioDatosComponent{
  public cadenaSent$!: Observable<MatrizDatos>;
  constructor(private service: CadenasService){}
  datos: MatrizDatos = {
    campo1: 'valor por defecto',
    campo2: 'valor por defecto'
  }
  enviarDatos(){
    console.log("entra");
    this.service.sentChain(this.datos).subscribe(
      (Response) => {
        console.log('Respuesta del API', Response);
      },
      (error) =>{
        console.error('Error al enviar datos al API', error);
      }
    )

  }

}
