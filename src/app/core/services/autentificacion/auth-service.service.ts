  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Mensaje, MoldeLogin, MoldeUsers } from '../../../intrfaces/users';
  import { Observable } from 'rxjs';
import { Cadenahash, hashResult } from '../../../intrfaces/cadenahash';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthServiceService {
    private token: string | null = null;
    private apiURL = 'https://pruebasbackend.onrender.com/api'
    constructor(private http: HttpClient) {
      const storedToken = localStorage.getItem('token');
      if (storedToken !== null) {
        this.token = storedToken;
      }
    }
    loginuser(datos :MoldeLogin): Observable<Mensaje>{
      return this.http.post<Mensaje>(`${this.apiURL}/login/`, datos)
    }
    createuser(datos: MoldeUsers): Observable<Mensaje>{
      return this.http.post<Mensaje>(`${this.apiURL}/registro/`, datos)
    }
    setToken(token: string){
      this.token = token;
      localStorage.setItem('token', token);
    }
    getToken(): string | null {
      return localStorage.getItem('token');
    }
    getHeaders(): HttpHeaders {
      const token = this.getToken();
      if (token === null) {
        return new HttpHeaders();
      }
      const headersConfig = {
        'Content-Type': 'application/json',
        'Authorization': `token ${token}`
      };
      return new HttpHeaders(headersConfig);
    }
    isLoggedIn(): boolean{
      return this.getToken() !== null;
    }
    deleteToken(){
      this.token = null;
      localStorage.removeItem('token')
    }
    Crearhash(cadena: Cadenahash): Observable<hashResult> {
      const headers = this.getHeaders();
      return this.http.post<hashResult>(`${this.apiURL}/hash/`, cadena, {headers});
    }
  }
