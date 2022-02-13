import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Abastecimento } from 'src/app/models/maquinario/abastecimento';
import { Maquina } from 'src/app/models/maquinario/Maquina';
import { AbastecimentoService } from 'src/app/service/maquinario/abastecimento.service';
import { MaquinaService } from 'src/app/service/maquinario/maquina/maquina.service';

@Component({
  selector: 'app-cad-abastecimento',
  templateUrl: './cad-abastecimento.component.html',
  styleUrls: ['./cad-abastecimento.component.css']
})
export class CadAbastecimentoComponent implements OnInit {
  isNew = true;
  form: FormGroup;
  datepipe: DatePipe;

  maquinas: Array<Maquina>;
  abastecimento: Abastecimento;

  constructor(
    private maquinaService: MaquinaService,
    private abastecimentoService: AbastecimentoService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CadAbastecimentoComponent>
  ){
    this.form = new FormGroup({
      maquina: new FormControl('', Validators.required),
      data:  new FormControl('', Validators.required),  
      hora:  new FormControl(''),  
      horimetro:  new FormControl(''),  
      litros:  new FormControl('', Validators.required),  
    });
  }

  ngOnInit() {

    this.datepipe = new DatePipe('pt-BR');


    this.loadMaquinas();

  }

  loadMaquinas(){
    this.maquinaService.getAll().subscribe(result =>{
      this.maquinas = result;
    });
  }

  save(){
    this.abastecimento = new Abastecimento(
      this.form.value.maquina.id,
      this.form.value.litros,
      this.datepipe.transform(this.form.value.data, 'yyyy-MM-dd'),
      this.form.value.hora,
      this.form.value.horimetro
    );

    this.abastecimentoService.create(this.abastecimento).subscribe(result =>{
      console.log(result);
      this._snackBar.open("Salvo Com sucesso", "Fechar", { duration: 3000 });
      this.dialogRef.close();
    })
  }

  update(){
    console.log(this.form.value.nome)
    this.abastecimento.litros = this.form.value.litros;
    this.abastecimento.data = this.datepipe.transform(this.form.value.data, 'yyyy-MM-dd');
    this.abastecimento.hora = this.form.value.hora;
    this.abastecimento.horimetro = this.form.value.horimetro;

    this.abastecimentoService.update(this.abastecimento.id, this.abastecimento).subscribe(result => {
      console.log(result);
      this._snackBar.open("Editado Com sucesso", "Fechar");
      this.dialogRef.close();
    })
  }

  editData(data: Abastecimento){
    this.isNew = false;
    this.abastecimento = data;
    console.log(data)
    this.form.patchValue(this.abastecimento);
  }

}
