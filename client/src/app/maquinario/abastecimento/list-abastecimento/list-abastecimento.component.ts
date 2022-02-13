import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Abastecimento } from 'src/app/models/maquinario/abastecimento';
import { AbastecimentoService } from 'src/app/service/maquinario/abastecimento.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { CadAbastecimentoComponent } from '../cad-abastecimento/cad-abastecimento.component';

@Component({
  selector: 'app-list-abastecimento',
  templateUrl: './list-abastecimento.component.html',
  styleUrls: ['./list-abastecimento.component.css']
})
export class ListAbastecimentoComponent implements OnInit {
  
  dataSource: MatTableDataSource<Abastecimento>;
  displayedColumns = [ 'maquina', 'litros', 'data', 'hora', 'horimetro', 'acao'];
  isLoadingResults = true;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
    private abastecimentoService: AbastecimentoService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.loadAbastecimento();
  }

  newDate(data){
    const d = new Date(data);
    console.log(d)
    return d;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

  remove(abastecimento: Abastecimento){
    this.abastecimentoService.delete(abastecimento.id).subscribe(() => {
      this.isLoadingResults = true;
      this.loadAbastecimento();
    });
  }

  openEditAbastecimento(abastecimento: Abastecimento){
    const cadAb = this.dialog.open(CadAbastecimentoComponent, { width: '550px'});
    cadAb.componentInstance.editData(abastecimento)
  }
  openCadAbastecimento(maquina: Abastecimento){
    const cadAb = this.dialog.open(CadAbastecimentoComponent, { width: '550px'});
    cadAb.afterClosed().subscribe(result =>{
      // this.dataSource.data.push(result);
      this.loadAbastecimento();
    });
  }

  loadAbastecimento(){
    this.abastecimentoService.getAll().subscribe(
      abastecimento => {
        console.log(abastecimento)
        this.dataSource = new MatTableDataSource<Abastecimento>(abastecimento),
        this.dataSource.paginator = this.paginator,
        this.dataSource.sort = this.sort;
        this.isLoadingResults = false;
        this.dataSource.sort = this.sort;
      }
    );
  }


}
