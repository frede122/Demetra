import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DocComponent } from './financeiro/doc/doc.component';
import { MainComponent } from './shared/main/main.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CadMaquinaComponent } from './maquinario/maquina/cad-maquina/cad-maquina.component';
import { ListMaquinaComponent } from './maquinario/maquina/list-maquina/list-maquina.component';
import { CadAbastecimentoComponent } from './maquinario/abastecimento/cad-abastecimento/cad-abastecimento.component';
import { ListAbastecimentoComponent } from './maquinario/abastecimento/list-abastecimento/list-abastecimento.component';
import { ListManutencaoComponent } from './maquinario/manutencao/list-manutencao/list-manutencao.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { 
        path: 'main',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'doc', component: DocComponent, canActivate: [AuthGuard] },
            { path: 'maquina',  children: [
                { path: 'list-maquina', component: ListMaquinaComponent },
                { path: 'list-abastecimento', component: ListAbastecimentoComponent },
                { path: 'list-manutenção', component: ListManutencaoComponent },
                { path: '', component: ListMaquinaComponent, }
            ]}
        ]
    },
    { path: '',   redirectTo: '/main', pathMatch: 'full' },
    // { path: '/*',  redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }