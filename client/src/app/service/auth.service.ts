import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/do';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuth: boolean = false;

  showMenu = new EventEmitter<boolean>();
  
  constructor(private http: HttpClient, private router : Router) {

  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLogged(){
    if(this.getToken() && this.getUser()){
      return true;
    }else{
      return false;
    }
  }

  login(credentials: {email:string, password: string}){
    return this.http.post<any>(`${ environment.apiUrl }/api/login`, credentials)
      .do(data =>{
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.userAuth = true;
        this.showMenu.emit(this.userAuth);
        this.router.navigate(['/main']);
      });
  }
}
