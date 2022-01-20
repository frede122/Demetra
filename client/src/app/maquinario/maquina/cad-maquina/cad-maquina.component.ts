import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MatDatepicker } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

import { Maquina } from 'src/app/models/maquinario/Maquina';
import { ModeloMaquina } from 'src/app/models/maquinario/modelo-maquina';
import { TipoMaquina } from 'src/app/models/maquinario/tipo-maquina';
import { MaquinaService } from 'src/app/service/maquinario/maquina.service';
import { ModeloMaquinaService } from 'src/app/service/maquinario/maquina/modelo-maquina.service';
import {TipoMaquinasService } from 'src/app/service/maquinario/maquina/tipo-maquinas.service';

import { LOCALE_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cad-maquina',
  templateUrl: './cad-maquina.component.html',
  styleUrls: ['./cad-maquina.component.css']
})
export class CadMaquinaComponent implements OnInit {
  isNew: boolean = true;
  startDate = new Date('1990-01-01');
  nome: string;
  

  tipoMaquinas: Array<TipoMaquina>;
  modeloMaquinas: Array<ModeloMaquina>;
  maquina: Maquina;

  form: FormGroup;
  datepipe: DatePipe;

  constructor(
    private maquinaService: MaquinaService,
    private modeloMaquinaService: ModeloMaquinaService,
    private tipoMaquinaService: TipoMaquinasService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ){


    this.datepipe = new DatePipe('pt-BR');


    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      ano:  new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.loadModeloMaquinario();
    this.loadTipoMaquinario();
    this.loadData();
        
  }
  
  loadTipoMaquinario(){
    this.tipoMaquinaService.getAll().subscribe(
      tipoMaquinas => 
      this.tipoMaquinas = tipoMaquinas
    );
  }

  loadModeloMaquinario(){
    this.modeloMaquinaService.getAll().subscribe(
      modeloMaquinas => 
      this.modeloMaquinas = modeloMaquinas
    );
  }

  loadData(){
    const { params } = this.activatedRoute.snapshot;
    if(params.id){
      this.isNew = false
      console.log(params)
      this.maquinaService.getById(params.id).subscribe( maquina => {
        this.maquina = maquina
        this.form.patchValue(this.maquina)
      });
      
    }else{
      this.isNew = true;
    }
  }

  save(){
    this.maquina = new Maquina(
      this.form.value.modelo,
      this.form.value.nome,
      this.form.value.ano, 
      this.form.value.tipo
    );
    this.maquina.ano = this.datepipe.transform(this.maquina.ano, 'yyyy-MM-dd') 
    this.maquinaService.create(this.maquina).subscribe(result => {
      console.log(result),
      this._snackBar.open("Salvo Com sucesso", "Fechar")
    })
  }

  update(){
    const { params } = this.activatedRoute.snapshot;
    this.maquina.nome = this.form.value.nome;
    this.maquina.modelo_maquina_id = this.form.value.modelo;
    this.maquina.ano = this.datepipe.transform(this.form.value.ano, 'yyyy-MM-dd');
    this.maquina.tipo = this.form.value.tipo;

    this.maquinaService.update(params.id, this.maquina).subscribe(result => {
      console.log(result),
      this._snackBar.open("Editado Com sucesso", "Fechar")
    })
  }

}
