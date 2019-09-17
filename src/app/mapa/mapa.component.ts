import { Component } from '@angular/core';

@Component({
  selector: 'map-google',
  templateUrl: 'mapa.component.html',
  styleUrls: ['mapa.component.css'],
})
export class mapaComponent {
  title = 'Selecciona la ubicación';
  lat = -34.8002443;
  lng = -58.3873584;
}