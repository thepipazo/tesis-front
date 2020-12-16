import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../servicios/authentication/token.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuardService implements CanActivate{

  realRol: string;

  constructor(
    private token:TokenService,
    private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    const roles = this.token.getAuthorities();
    this.realRol = 'user';

    roles.forEach(rol =>{
      
      if(rol === 'ROLE_ADMIN'){
        this.realRol = 'admin';
      }
    });

    if(!this.token.getToken() || expectedRol.indexOf(this.realRol) === -1){
      this.route.navigate(['']);
      return false;
    }
    return true;
  }
}
