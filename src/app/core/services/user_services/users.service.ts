import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje, MoldeLogin, MoldeUsers, ResultUsers } from '../../../intrfaces/users';
import { AuthServiceService } from '../autentificacion/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiURL = 'http://127.0.0.1:8000/api'
  constructor(private http:HttpClient, private authservice: AuthServiceService) { }
  getuser(): Observable<ResultUsers>{
    return this.http.get<ResultUsers>(`${this.apiURL}/obtener_usuarios/`)
  }
  createuser(datos: MoldeUsers): Observable<Mensaje>{
    return this.http.post<Mensaje>(`${this.apiURL}/usuarios/registro/`, datos)
  }
  edituser(id: number, datos: MoldeUsers): Observable<MoldeUsers>{
    return this.http.put<MoldeUsers>(`${this.apiURL}/usuarios/actualizar/${id}/`, datos)
  }
  deleteuser(id: number): Observable<MoldeUsers>{
    return this.http.delete<MoldeUsers>(`${this.apiURL}/usuarios/eliminar/${id}/`)
  }
}
