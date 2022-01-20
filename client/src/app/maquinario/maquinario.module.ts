import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { 
  MatCardModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatInputModule, 
  MatIconModule, 
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTableModule
  
} from '@angular/material';

import { CadMaquinaComponent } from './maquina/cad-maquina/cad-maquina.component';
import { MarcaMaquinaComponent } from './maquina/marca-maquina/marca-maquina.component';
import { ModeloMaquinaComponent } from './maquina/modelo-maquina/modelo-maquina.component';
import { ListMaquinaComponent } from './maquina/list-maquina/list-maquina.component';



@NgModule({
  declarations: [
    CadMaquinaComponent, 
    MarcaMaquinaComponent, 
    ModeloMaquinaComponent, 
    ListMaquinaComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    FormsModule
  ]
})
export class MaquinarioModule { }
