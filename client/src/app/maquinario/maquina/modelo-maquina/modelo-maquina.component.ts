import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MarcaMaquina } from 'src/app/models/maquinario/marca-maquina';
import { ModeloMaquina } from 'src/app/models/maquinario/modelo-maquina';
import { MarcaMaquinaService } from 'src/app/service/maquinario/maquina/marca-maquina.service';
import { ModeloMaquinaService } from 'src/app/service/maquinario/maquina/modelo-maquina.service';

@Component({
  selector: 'app-modelo-maquina',
  templateUrl: './modelo-maquina.component.html',
  styleUrls: ['./modelo-maquina.component.css']
})
export class ModeloMaquinaComponent implements OnInit {

  form: FormGroup;
  modelo: ModeloMaquina;
  marcaMaquinas: Array<MarcaMaquina>;
  constructor(
    public dialogRef: MatDialogRef<ModeloMaquinaComponent>,
    private modeloMaquinaService: ModeloMaquinaService,
    private marcaMaquinaService: MarcaMaquinaService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
    });
    this.loadMarcaMaquinario();
  }

  closeWindow(){
    this.dialogRef.close();
  }
  salvar(){
    this.modelo = new ModeloMaquina(
      this.form.value.nome,
      this.form.value.marca
    );
    console.log(this.modelo)
    this.modeloMaquinaService.create(this.modelo).subscribe(result => {
      this.dialogRef.close(result)  
    })
    
  }

  loadMarcaMaquinario(){
    this.marcaMaquinaService.getAll().subscribe(
      marcaMaquinas => 
      this.marcaMaquinas = marcaMaquinas
    );
  }
}
