import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Acceso } from '../../Acceso';
import { AccesoService } from '../../services/acceso.service';


@Component({
  selector: 'app-modificar-acceso',
  templateUrl: './modificar-acceso.component.html',
  styleUrls: ['./modificar-acceso.component.css']
})
export class ModificarAccesoComponent implements OnInit {

  @Input() acceso: Acceso;

  constructor(
    private accesoService: AccesoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAcceso();
  }

  getAcceso(): void{

    const id = +this.route.snapshot.paramMap.get('id'); // El signo + para convertir la cadena encontrada en número
    this.accesoService.getAcceso( id )
                .subscribe(acceso => this.acceso = acceso);
  }
}

