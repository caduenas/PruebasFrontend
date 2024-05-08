import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadenahash, hashResult } from '../../../intrfaces/cadenahash';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../autentificacion/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class RequesthashService {
  private apiURL = 'https://pruebasbackend.onrender.com/api';

  constructor(private http: HttpClient, private authservice: AuthServiceService) { }

  Crearhash(cadena: Cadenahash): Observable<hashResult> {
    const headers = this.authservice.getHeaders();
    return this.http.post<hashResult>(`${this.apiURL}/hash/`, cadena, {headers});
  }
}

