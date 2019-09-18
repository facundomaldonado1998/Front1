import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { mapaComponent } from './mapa/mapa.component';
import { HomeMapaComponent } from './home-mapa/home-mapa.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HomeComponent,
    mapaComponent,
    HomeMapaComponent
    ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0tVnmaegtcUM-LiZBzQEhOz0VSdjToWU'
    }),
    HttpClientModule
  ],
  providers: [
   appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
