import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Doc } from 'src/app/models/financeiro/doc';

@Injectable({
  providedIn: 'root'
})

export class DocService extends BaseService<Doc>{

  constructor(public http: HttpClient) {
    super(http);
    this.route = "api/doc";
  }
}
