import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Acceso } from '../../Acceso';
import { AccesoService } from '../../services/acceso.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-modificar-acceso',
  templateUrl: './modificar-acceso.component.html',
  styleUrls: ['./modificar-acceso.component.css']
})

export class ModificarAccesoComponent implements OnInit {

  acceso: Acceso = {
      id: '',
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

    // acceso = new Acceso();

        constructor(
    private accesoService: AccesoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAcceso();
  }

  goBack(): void {
    this.location.back();
  }

  getAcceso(): void {

    const id = +this.route.snapshot.paramMap.get('id'); // El signo + para convertir la cadena encontrada en número
    this.accesoService.getData(id)
      .subscribe(acceso => this.acceso = acceso);
  }

  updateAcceso(f: NgForm) {

    this.accesoService.updateData( this.acceso )
      .subscribe(() => {
        this.goBack();
      });
  }

}

