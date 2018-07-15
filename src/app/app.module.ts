import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccesoComponent } from './components/acceso/acceso.component';
import { ModificarAccesoComponent } from './components/modificar-acceso/modificar-acceso.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CrearAccesoComponent } from './components/crear-acceso/crear-acceso.component';

@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    ModificarAccesoComponent,
    CrearAccesoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Para el uso de llamasa HTTP

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

