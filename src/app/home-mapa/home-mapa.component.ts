import { Component, Input, OnInit } from '@angular/core';
import { Marcador } from '../model/reclamo';

@Component({
  selector: 'app-home-mapa',
  templateUrl: './home-mapa.component.html',
  styleUrls: ['./home-mapa.component.css']
})
export class HomeMapaComponent implements OnInit {
  @Input() marcadores: Marcador[] = [];

  constructor() { }

  ngOnInit() { }

}
