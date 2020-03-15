import { AppRoutingModule } from './app.routing.module';

import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHandler, HTTP_INTERCEPTORS, HttpBackend, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DocComponent } from './financeiro/doc/doc.component';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './interceptors/token.interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'; 
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import { importType } from '@angular/compiler/src/output/output_ast';
import { AuthGuard } from './guards/auth.guard';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    DocComponent,
  ],
  imports: [

    LoginModule,
    AppRoutingModule,
    RouterModule,


    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,



  ],
  providers: [ 
    HttpClient, 
    AuthService, 
    AuthGuard,
    RouterOutlet,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
