import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Acceso } from '../Acceso';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type': 'application/json' } )
};


@Injectable({
  providedIn: 'root'
})

export class AccesoService {

  private accesosUrl = 'api/accesos'; // URL to web api

  constructor(
    private http: HttpClient) { }

  // https://angular.io/tutorial/toh-pt6#get-heroes-with-httpclient
  getAllData(): Observable<Acceso[]> {
    return this.http.get<Acceso[]>( this.accesosUrl );
  }

  // https://angular.io/tutorial/toh-pt6#get-hero-by-id
  getData(id: number): Observable<Acceso> {
    const url = `${this.accesosUrl}/${id}`;
    return this.http.get<Acceso>(url);
  }

  // https://angular.io/tutorial/toh-pt6#update-heroes
  updateData( acceso: Acceso ): Observable<any> {
    return this.http.put(this.accesosUrl, acceso, httpOptions);
  }

  // https://angular.io/tutorial/toh-pt6#add-a-new-hero
  addData( acceso: Acceso ): Observable<Acceso> {
    return this.http.post<Acceso>(this.accesosUrl, acceso, httpOptions);
  }

  // https://angular.io/tutorial/toh-pt6#delete-a-hero
  deleteData(acceso: Acceso | number): Observable<Acceso> {
    const id = typeof acceso === 'number' ? acceso : acceso.id;
    const url = `${this.accesosUrl}/${id}`;

    return this.http.delete<Acceso>(url, httpOptions);

  }

}
