import { NgModule } from '@angular/core';

// Importando RouterModule y Routes para configurar el enrrutador
import { RouterModule, Routes } from '@angular/router';

import { AccesoComponent } from './components/acceso/acceso.component';
import { ModificarAccesoComponent } from './components/modificar-acceso/modificar-acceso.component';

const routes: Routes = [
  { path: '', redirectTo: '/accesos', pathMatch: 'full'},
  { path: 'accesos', component: AccesoComponent },
  { path: 'detail/:id', component: ModificarAccesoComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
