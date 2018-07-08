import { Component, OnInit } from '@angular/core';
import { Acceso } from '../../Acceso';

import { AccesoService } from '../../services/acceso.service';


@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  accesos: Acceso[];

  constructor(private accesoService: AccesoService) { }

  ngOnInit() {
    // Llamando a la lista de accesos desde el Servicio
    this.getAccesos();

  }

  getAccesos(): void {
    this.accesoService.getAccesos()
        .subscribe(accesos => this.accesos = accesos);
  }

}
