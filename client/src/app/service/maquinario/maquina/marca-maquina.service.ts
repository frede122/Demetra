import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MarcaMaquina } from 'src/app/models/maquinario/marca-maquina';
import { BaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaMaquinaService extends BaseService<MarcaMaquina> {

  constructor(public http: HttpClient) {
    super(http);
    this.route = "api/marca-maquina";
  }
}
