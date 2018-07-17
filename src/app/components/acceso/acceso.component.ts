import { Component, OnInit } from '@angular/core';
import { Acceso } from '../../Acceso';

import { AccesoService } from '../../services/acceso.service';
import { isNgTemplate } from '@angular/compiler';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';


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
    this.accesoService.getAllData()
      .subscribe(accesos => this.accesos = accesos.reverse() );
  }

  deleteAcceso( acceso ) {

    if ( confirm(`Está seguro de borrar el acceso número ${ acceso.numSolicitud }`) ) {
      this.accesoService.deleteData( acceso )
        .subscribe( () => {
          this.accesos = this.accesos.filter( item => item !== acceso  );
        });
      }

  }

  aprobarAcceso( acceso ) {

    acceso = this.accesos.find( item => item === acceso );

    acceso.aprobacion = !acceso.aprobacion;
    this.accesoService.updateData( acceso )
      .subscribe();
  }
}
