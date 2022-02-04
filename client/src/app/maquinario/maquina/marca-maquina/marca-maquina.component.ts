import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MarcaMaquina } from 'src/app/models/maquinario/marca-maquina';
import { MarcaMaquinaService } from 'src/app/service/maquinario/maquina/marca-maquina.service';

@Component({
  selector: 'app-marca-maquina',
  templateUrl: './marca-maquina.component.html',
  styleUrls: ['./marca-maquina.component.css']
})
export class MarcaMaquinaComponent implements OnInit {
  
  form: FormGroup;
  marca: MarcaMaquina;
  constructor(
    public dialogRef: MatDialogRef<MarcaMaquinaComponent>,
    private marcaMaquinaService: MarcaMaquinaService
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
    this.marca = new MarcaMaquina(
      this.form.value.nome
    );
    console.log(this.marca)
    this.marcaMaquinaService.create(this.marca).subscribe(result => 
      this.dialogRef.close(result)  
    )
    
  }
}
