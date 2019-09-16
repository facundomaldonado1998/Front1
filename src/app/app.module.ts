import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [
   appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
