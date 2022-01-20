import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TipoMaquina } from 'src/app/models/maquinario/tipo-maquina';
import { BaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})
export class TipoMaquinasService extends BaseService<TipoMaquina>{

  constructor(public http: HttpClient) {
    super(http);
    this.route = "api/tipo-maquina";
  }
}
