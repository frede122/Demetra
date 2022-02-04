import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ModeloMaquina } from 'src/app/models/maquinario/modelo-maquina';
import { BaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})

export class ModeloMaquinaService extends BaseService<ModeloMaquina>{
  
  constructor(public http: HttpClient) {
    super(http);
    this.route = "api/modelo-maquina";
  }
}
