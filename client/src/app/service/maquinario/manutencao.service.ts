import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manutencao } from 'src/app/models/maquinario/manutencao';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ManutencaoService extends BaseService<Manutencao> {
  
  constructor(public http: HttpClient) {
    super(http);
    this.route = "api/manutencao";
    this.where = "whereMaquina"
  }


}
