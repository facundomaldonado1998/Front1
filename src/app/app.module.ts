import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { mapaComponent } from './mapa/mapa.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HomeComponent,
    mapaComponent    
    ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0tVnmaegtcUM-LiZBzQEhOz0VSdjToWU'
    })
  ],
  providers: [
   appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
