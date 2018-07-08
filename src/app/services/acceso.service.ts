import { Injectable } from '@angular/core';
import { Acceso } from '../Acceso';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  private accesosUrl = 'api/accesos'; // URL to web api

  constructor(
    private http: HttpClient) { }

  getAccesos(): Observable<Acceso[]> {
    return this.http.get<Acceso[]>( this.accesosUrl );
  }

  getAcceso(id: number): Observable<Acceso> {
    const url = `${this.accesosUrl}/${id}`;
    return this.http.get<Acceso>(url);
  }

}
