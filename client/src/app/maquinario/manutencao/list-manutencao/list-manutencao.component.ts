import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs-compat';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import {map, startWith} from 'rxjs/operators';
import { Manutencao } from 'src/app/models/maquinario/manutencao';
import { ManutencaoService } from 'src/app/service/maquinario/manutencao.service';
import { CadManutencaoComponent } from '../cad-manutencao/cad-manutencao.component';
import { MaquinaService } from 'src/app/service/maquinario/maquina/maquina.service';
import { Maquina } from 'src/app/models/maquinario/Maquina';


@Component({
  selector: 'app-list-manutencao',
  templateUrl: './list-manutencao.component.html',
  styleUrls: ['./list-manutencao.component.css']
})
export class ListManutencaoComponent implements OnInit {

  maquinaControl = new FormControl();
  filteredOptions: Observable<Maquina[]>;
  options: Maquina[];
  dataSource: MatTableDataSource<Manutencao>;
  displayedColumns = [ 'data', 'maquina', 'descricao', 'custo', 'acao'];
  isLoadingResults = true;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
    private manutencaoService: ManutencaoService,
    private maquinaService: MaquinaService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.loadManutencao();
    this.loadMaquina();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayFn(maquina?: Maquina): string | undefined {
    return maquina ? maquina.nome : undefined;
  }

  filterInit(){
    this.filteredOptions = this.maquinaControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.nome),
      map(nome => nome ? this._filter(nome) : this.options.slice())
    );
  }

  private _filter(nome: string): Maquina[] {
    const filterValue = nome.toLowerCase();

    return this.options.filter(option => option.nome.toLowerCase().indexOf(filterValue) === 0);
  }

  
  excluirItem(element){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { width: '375px'});
    dialogRef.componentInstance.title = element.nome;
    dialogRef.componentInstance.message = "Gostaria realmente de excluir a entrada:" + element.data;
    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.remove(element)
    });
  }

  remove(manutencao: Manutencao){
    this.manutencaoService.delete(manutencao.id).subscribe(() => {
      this.isLoadingResults = true;
      this.loadManutencao();
    });
  }

  openEditManutencao(manutencao: Manutencao){
    const cadAb = this.dialog.open(CadManutencaoComponent, { width: '550px'});
    cadAb.componentInstance.editData(manutencao)
  }
  openCadManutencao(maquina: Manutencao){
    const cadAb = this.dialog.open(CadManutencaoComponent, { width: '550px'});
    cadAb.afterClosed().subscribe(result => this.dataSource.data.push(result));
  }


  loadManutencao(){
    this.manutencaoService.getAll().subscribe(
      manutencao => {
        this.dataSource = new MatTableDataSource<Manutencao>(manutencao),
        this.dataSource.paginator = this.paginator,
        this.dataSource.sort = this.sort;
        this.isLoadingResults = false;
        this.dataSource.sort = this.sort;
      }
    );
  }

  loadMaquina(){
    this.maquinaService.getAll().subscribe(maquina =>{
        this.options = maquina;
        this.options.push(new Maquina(null,"Todos --", null,null,-1))
        this.filterInit();
    });
  }

  searchManutencao(event: MatAutocompleteSelectedEvent){
    const id = event.option.value.id;
    if(id && id > 0){
      this.manutencaoService.getByWhere(id).subscribe(m => this.dataSource.data = m);
    }else{
      this.manutencaoService.getAll().subscribe(m => this.dataSource.data = m)
    }
  }

  
}
