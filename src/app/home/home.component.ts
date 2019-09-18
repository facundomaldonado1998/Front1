import { Component, OnInit } from '@angular/core';
import { ReclamosService } from '../reclamos.service';
import { Reclamo, Marcador } from '../model/reclamo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public reclamos: Reclamo[] = [];
  public marcadores: Marcador[] = [];
  public hasReclamos = false;

  constructor(
    private reclamosService: ReclamosService
  ) { }

  ngOnInit() {
    this.reclamosService.fetchReclamos().subscribe(records =>  {
        this.reclamos = records;
        this.hasReclamos = records.length > 0;

        this.reclamos.forEach(r => this.marcadores.push({
          lat: r.lat,
          lng: r.lng
        }));
    });

    console.log(this.marcadores);
  }
}
