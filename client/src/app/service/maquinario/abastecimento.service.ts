import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abastecimento } from 'src/app/models/maquinario/abastecimento';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class AbastecimentoService extends BaseService<Abastecimento>{

  constructor(public http: HttpClient) {
    super(http);
    this.route = "api/abastecimento";
  }
}
