import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Maquina } from 'src/app/models/maquinario/Maquina';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService extends BaseService<Maquina>{

  constructor(public http: HttpClient) {
    super(http);
    this.route = "api/maquina";
  }
}
