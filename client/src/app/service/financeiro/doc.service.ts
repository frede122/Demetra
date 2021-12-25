import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/do';
import { Doc } from 'src/app/models/financeiro/Doc';

@Injectable({
  providedIn: 'root'
})

export class DocService extends BaseService<Doc>{

  constructor(public http: HttpClient) {
    super(http);
    this.route = "api/doc";
  }
}
