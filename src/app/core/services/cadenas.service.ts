import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultsEjemplo } from '../../intrfaces/ejemplo';
import { MatrizDatos } from '../../intrfaces/datos';

@Injectable({
  providedIn: 'root'
})
export class CadenasService {
  private apiURL = 'http://127.0.0.1:8000/api'
  constructor(private http:HttpClient) { }
  getResulslist(): Observable<ResultsEjemplo>{
    return this.http.get<ResultsEjemplo>(`${this.apiURL}/obtener_ejemplos/`)
  }

  sentChain(datos: MatrizDatos): Observable<MatrizDatos>{
    return this.http.post<MatrizDatos>(`${this.apiURL}/crear_ejemplo/`, datos)
  }
}
