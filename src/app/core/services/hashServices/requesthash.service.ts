import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadenahash, hashResult} from '../../../intrfaces/cadenahash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequesthashService {
  private apiURL = 'http://127.0.0.1:8000/api'
  constructor(private http:HttpClient) { }
  Crearhash(cadena: Cadenahash): Observable<hashResult>{
    return this.http.post<hashResult>(`${this.apiURL}/hash/`,cadena)
  }
}
