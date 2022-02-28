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
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatAutocompleteModule
  
} from '@angular/material';

import { CadMaquinaComponent } from './maquina/cad-maquina/cad-maquina.component';
import { MarcaMaquinaComponent } from './maquina/marca-maquina/marca-maquina.component';
import { ModeloMaquinaComponent } from './maquina/modelo-maquina/modelo-maquina.component';
import { ListMaquinaComponent } from './maquina/list-maquina/list-maquina.component';
import { RouterModule } from '@angular/router';
import { TipoMaquinaComponent } from './maquina/tipo-maquina/tipo-maquina.component';
import { ListAbastecimentoComponent } from './abastecimento/list-abastecimento/list-abastecimento.component';
import { ListManutencaoComponent } from './manutencao/list-manutencao/list-manutencao.component';
import { ListHorimetroComponent } from './servicos/list-horimetro/list-horimetro.component';
import { CadHorimetroComponent } from './servicos/cad-horimetro/cad-horimetro.component';
import { CadManutencaoComponent } from './manutencao/cad-manutencao/cad-manutencao.component';
import { CadAbastecimentoComponent } from './abastecimento/cad-abastecimento/cad-abastecimento.component';
import { TimePipe } from '../pipes/time.pipe';



@NgModule({
  declarations: [
    TimePipe,
    CadMaquinaComponent, 
    MarcaMaquinaComponent, 
    ModeloMaquinaComponent, 
    ListMaquinaComponent, 
    TipoMaquinaComponent, 
    ListAbastecimentoComponent, 
    ListManutencaoComponent, 
    ListHorimetroComponent, 
    CadHorimetroComponent, 
    CadManutencaoComponent, 
    CadAbastecimentoComponent
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
    MatMenuModule,
    MatPaginatorModule,    
    MatProgressSpinnerModule,
    MatSortModule,
    MatAutocompleteModule,
    FormsModule,
    RouterModule
  ],
  entryComponents: [
    MarcaMaquinaComponent,
    CadMaquinaComponent,
    ModeloMaquinaComponent,
    TipoMaquinaComponent,
    CadAbastecimentoComponent,
    CadHorimetroComponent,
    CadManutencaoComponent
  ],
})
export class MaquinarioModule { }
