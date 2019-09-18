import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Reclamo } from './model/reclamo';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Obtiene una lista de reclamos
   * @return Observable<Reclamo[]>
   */

  fetchReclamos(): Observable<Reclamo[]> {
    return this.http.get<Reclamo[]>('/api/reclamos/', {});
  }

}
