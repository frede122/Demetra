import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MarcaMaquina } from 'src/app/models/maquinario/marca-maquina';
import { TipoMaquina } from 'src/app/models/maquinario/tipo-maquina';
import { TipoMaquinaService } from 'src/app/service/maquinario/maquina/tipo-maquina.service';

@Component({
  selector: 'app-tipo-maquina',
  templateUrl: './tipo-maquina.component.html',
  styleUrls: ['./tipo-maquina.component.css']
})
export class TipoMaquinaComponent implements OnInit {
 
  form: FormGroup;
  tipo: TipoMaquina;
  constructor(
    public dialogRef: MatDialogRef<TipoMaquinaComponent>,
    private tipoMaquinaService: TipoMaquinaService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required)
    });
  }

  closeWindow(){
    this.dialogRef.close();
  }
  salvar(){
    this.tipo = new TipoMaquina(
      this.form.value.nome
    );
    console.log(this.tipo)
    this.tipoMaquinaService.create(this.tipo).subscribe(result => {
      this.dialogRef.close(result)  
    })
    
  }

}
