import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultsEjemplo } from '../../intrfaces/ejemplo';
import { CadenasService } from '../../core/services/cadenas.service';
import { AsyncPipe } from '@angular/common';
import { EnvioDatosComponent } from '../../componentes/envio-datos/envio-datos.component';
import { UsersService } from '../../core/services/user_services/users.service';
import { ResultUsers } from '../../intrfaces/users';

@Component({
  selector: 'app-listacadena',
  standalone: true,
  imports: [AsyncPipe,EnvioDatosComponent],
  templateUrl: './listacadena.component.html',
  styleUrl: './listacadena.component.css'
})
export class ListacadenaComponent implements OnInit{
  public cadenaResult$!: Observable<ResultUsers>;
  constructor(private service: UsersService){}
  ngOnInit(): void {
      this.cadenaResult$ = this.service.getuser();
  }

}
