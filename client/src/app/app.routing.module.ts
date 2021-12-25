import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DocComponent } from './financeiro/doc/doc.component';
import { MainComponent } from './shared/main/main.component';
import { MenuComponent } from './shared/components/menu/menu.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { 
        path: 'main',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'doc', component: DocComponent, canActivate: [AuthGuard] },
        ]

  
    },
    // { path: 'main', component: DocComponent, canActivate: [AuthGuard] },
    // { path: 'doc', component: DocComponent, canActivate: [AuthGuard] },

    { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }