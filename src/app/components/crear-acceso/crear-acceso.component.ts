import { Component, OnInit } from '@angular/core';
import { Acceso } from '../../Acceso';

import { AccesoService } from '../../services/acceso.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crear-acceso',
  templateUrl: './crear-acceso.component.html',
  styleUrls: ['./crear-acceso.component.css']
})
export class CrearAccesoComponent implements OnInit {

  acceso: Acceso = {
    id: null,
    fechaCreacion: '',
    numSolicitud: '',
    idEstacion: '',
    nombreEstacion: '',
    nombresApellidosSolicitante: '',
    cedulaSolicitante: '',
    fechasSolicitud: {
      desde: '',
      hasta: '',
    },
    nombresApellidosResponsable: '',
    cedulaResponsable: '',
    vehiculo: {
      marca: '',
      modelo: '',
      color: '',
      placas: '',
    },
    aprobador: '',
    codigoAprobado: '',
    aprobacion: false,
  };


  constructor(
    private accesoService: AccesoService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  crearAcceso() {
    this.acceso.id = 10;
    this.accesoService.addData( this.acceso )
      .subscribe( () => {
        this.goBack();
      });
  }
}
