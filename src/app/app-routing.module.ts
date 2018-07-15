import { NgModule } from '@angular/core';

// Importando RouterModule y Routes para configurar el enrrutador
import { RouterModule, Routes } from '@angular/router';

import { AccesoComponent } from './components/acceso/acceso.component';
import { ModificarAccesoComponent } from './components/modificar-acceso/modificar-acceso.component';
import { CrearAccesoComponent } from './components/crear-acceso/crear-acceso.component';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full'},
  { path: 'all', component: AccesoComponent },
  { path: 'detail/:id', component: ModificarAccesoComponent },
  { path: 'add', component: CrearAccesoComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
