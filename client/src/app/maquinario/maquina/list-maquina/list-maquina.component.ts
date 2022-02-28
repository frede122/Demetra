import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog, MatSort, Sort, MatTableDataSource} from '@angular/material';
import { Maquina } from 'src/app/models/maquinario/Maquina';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CadMaquinaComponent } from '../cad-maquina/cad-maquina.component';
import { ActivatedRoute } from '@angular/router';
import { MaquinaService } from 'src/app/service/maquinario/maquina/maquina.service';



@Component({
  selector: 'app-list-maquina',
  templateUrl: './list-maquina.component.html',
  styleUrls: ['./list-maquina.component.css']
})

export class ListMaquinaComponent implements OnInit {
  
  dataSource: MatTableDataSource<Maquina>;
  displayedColumns = [ 'nome', 'data', 'tipo', 'marca', 'modelo', 'acao'];
  isLoadingResults = true;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(
    private MaquinaService: MaquinaService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    ){ }

  ngOnInit() {

    this.loadMaquinario();
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
    dialogRef.componentInstance.message = "Gostaria realmente de excluir a entrada:" + element.nome;
    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.remove(element)
    });
  }

  remove(maquina: Maquina){
    this.MaquinaService.delete(maquina.maquina_id).subscribe(() => {
      this.isLoadingResults = true;
      this.loadMaquinario();
    });
  }

  openEditMaquina(maquina: Maquina){
    const cadMaq = this.dialog.open(CadMaquinaComponent, { width: 'auto'});
    cadMaq.componentInstance.editData(maquina)
  }
  openCadMaquina(maquina: Maquina){
    const cadMaq = this.dialog.open(CadMaquinaComponent, { width: 'auto'});
    cadMaq.afterClosed().subscribe(result =>{
      // this.dataSource.data.push(result);
      this.loadMaquinario();
    });
  }

  loadMaquinario(){
    this.MaquinaService.getAll().subscribe(
      maquinas => {
        this.dataSource = new MatTableDataSource<Maquina>(maquinas),
        this.dataSource.paginator = this.paginator,
        this.dataSource.sort = this.sort;
        this.isLoadingResults = false;
        this.dataSource.sort = this.sort;
      }
    );
  }

}
