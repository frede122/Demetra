import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | boolean 
    {
      if(!this.authService.isLogged()){
        this.router.navigate(['\login']);
        return false;
      }
      return true;
    }
    
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }
}
