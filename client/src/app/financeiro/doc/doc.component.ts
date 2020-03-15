import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  constructor(private http: HttpClient) {
  }


  valor: Array<any>;
  ngOnInit() {
    const a  = this.http.get<any[]>('http://127.0.0.1:8000/api/doc').subscribe(dados => this.valor = dados);
  }

}
