import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultsEjemplo } from '../../intrfaces/ejemplo';
import { CadenasService } from '../../core/services/cadenas.service';
import { AsyncPipe } from '@angular/common';
import { EnvioDatosComponent } from '../../componentes/envio-datos/envio-datos.component';

@Component({
  selector: 'app-listacadena',
  standalone: true,
  imports: [AsyncPipe,EnvioDatosComponent],
  templateUrl: './listacadena.component.html',
  styleUrl: './listacadena.component.css'
})
export class ListacadenaComponent implements OnInit{
  public cadenaResult$!: Observable<ResultsEjemplo>;
  constructor(private service: CadenasService){}
  ngOnInit(): void {
      this.cadenaResult$ = this.service.getResulslist();
  }

}
