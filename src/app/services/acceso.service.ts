import { Injectable } from '@angular/core';
import { Acceso } from '../Acceso';
import { ACCESOS } from '../mock-accesos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  constructor() { }

  getAccesos(): Observable<Acceso[]> {
    return of(ACCESOS);
  }

  getAcceso(id: number): Observable<Acceso> {
    return of(ACCESOS[ id ]);
  }

}

