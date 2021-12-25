import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DocService } from '../../service/financeiro/doc.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  valor: Array<any>;
  a: any;
  constructor(private http: HttpClient, private doc: DocService) {
    this.a = doc.getAll().subscribe(dados => this.valor = dados);
  }


  ngOnInit() {

    
    // const a  = this.http.get<any[]>('http://127.0.0.1:8000/api/doc').subscribe(dados => this.valor = dados);
  }

}
