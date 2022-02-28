import { DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Maquina } from 'src/app/models/maquinario/Maquina';
import { ModeloMaquina } from 'src/app/models/maquinario/modelo-maquina';
import { TipoMaquina } from 'src/app/models/maquinario/tipo-maquina';

import { ModeloMaquinaService } from 'src/app/service/maquinario/maquina/modelo-maquina.service';
import {TipoMaquinasService } from 'src/app/service/maquinario/maquina/tipo-maquinas.service';

import { ModeloMaquinaComponent } from '../modelo-maquina/modelo-maquina.component';
import { TipoMaquinaComponent } from '../tipo-maquina/tipo-maquina.component';
import { MaquinaService } from 'src/app/service/maquinario/maquina/maquina.service';

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
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CadMaquinaComponent>
  ){
    
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      ano:  new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required)
    });
    
  }

  ngOnInit() {
  
    this.datepipe = new DatePipe('pt-BR');

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

  loadData() {
    const { params } = this.activatedRoute.snapshot;
    console.log(params);
    if (params.id) {
      this.isNew = false;
      this.maquinaService.getById(params.id).subscribe(maquina => {
        this.maquina = maquina;
        this.form.patchValue(this.maquina);
      });

    } 
  }

  editData(data: Maquina){
    this.isNew = false;
    this.maquina = data
    this.form.patchValue(this.maquina);
  }

  openAddTipoMaquinario(){
    const tipoMaqRef = this.dialog.open(TipoMaquinaComponent, { width: '350px'});
    tipoMaqRef.afterClosed().subscribe( result =>{
      if(result)
        this.tipoMaquinas.push(result.data);
    });
  }
  openAddModelo(){
    const tipoMaqRef = this.dialog.open(ModeloMaquinaComponent, { width: '350px'});
    tipoMaqRef.afterClosed().subscribe( result =>{
      if(result)
        this.modeloMaquinas.push(result.data);
    });
  }

  save(){
    this.maquina = new Maquina(
      this.form.value.modelo.id,
      this.form.value.nome,
      this.form.value.ano, 
      this.form.value.tipo
    );
    this.maquina.ano = this.datepipe.transform(this.maquina.ano, 'yyyy-MM-dd');
     
    this.maquinaService.create(this.maquina).subscribe(result => {
      console.log(result);
      this._snackBar.open("Salvo Com sucesso", "Fechar", { duration: 3000 });
      this.dialogRef.close();
    })
  }

  update(){
    console.log(this.form.value.nome)
    this.maquina.nome = this.form.value.nome;
    this.maquina.modelo_maquina_id = this.form.value.modelo.id;
    this.maquina.ano = this.datepipe.transform(this.form.value.ano, 'yyyy-MM-dd');
    this.maquina.tipo = this.form.value.tipo;

    this.maquinaService.update(this.maquina.id, this.maquina).subscribe(result => {
      console.log(result);
      this._snackBar.open("Editado Com sucesso", "Fechar");
      this.dialogRef.close();
    })
  }

}
