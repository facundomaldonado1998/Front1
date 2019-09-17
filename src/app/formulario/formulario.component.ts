import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../model/contacto.usuario';
import { FormsModule } from '@angular/forms';
import { mapaComponent } from '../mapa/mapa.component';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public usuario: ContactoUsuario;

  constructor() 
  {
  this.usuario = new ContactoUsuario('','','',''); 
  }

  ngOnInit() {
  }

  onSubmit(form){
    
    console.log(this.usuario);
    console.log("Evento Submit Lanzado!!!");
    form.reset();
  }
}
