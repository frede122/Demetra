import { AppRoutingModule } from './app.routing.module';

import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { 
  HttpClient, 
  HTTP_INTERCEPTORS, 
  HttpClientModule 
} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthService } from './service/auth.service';
import { TokenInterceptor } from './interceptors/token.interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AuthGuard } from './guards/auth.guard';
import { LoginModule } from './login/login.module';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { SharedModule } from './shared/shared.module';
import { MaquinarioModule } from './maquinario/maquinario.module';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    LoginModule,
    FinanceiroModule,
    MaquinarioModule,
    SharedModule,

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
    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
