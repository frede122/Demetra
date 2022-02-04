import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  MatIconModule, 
  MatListModule, 
  MatButtonModule, 
  MatExpansionModule,
  MatSidenavModule 
} from '@angular/material';

import { MainComponent } from './main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { PostitComponent } from './components/postit/postit.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    MainComponent, 
    MenuComponent, 
    PostitComponent, 
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
})
export class SharedModule { }
