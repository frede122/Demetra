import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material';

import { MainComponent } from './main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { PostitComponent } from './components/postit/postit.component';



@NgModule({
  declarations: [
    MainComponent, 
    MenuComponent, PostitComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
