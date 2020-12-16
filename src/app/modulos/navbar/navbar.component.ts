import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { TokenService } from 'src/app/servicios/authentication/token.service';
import {CargarScriptsService} from "./../../cargar-scripts.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ocultar = true;
  isLogged = false;
  estado = ""
  user = "" ;
 

  constructor(
     private cargaScripts:CargarScriptsService,
     private tokenService: TokenService,
     private router: Router) { 
    cargaScripts.carga(["navbar/navbar"]);
  }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
     this.user = this.tokenService.getUserName();
     this.estado = "En Linea";
      
    }else{
      this.isLogged = false;
      this.router.navigate(['']);
    }
  }

  accion(){
    if(this.ocultar == true){
      this.ocultar = false;
    }else{
      this.ocultar= true;
    }
  }

  onLogOut(): void{
    this.tokenService.logOut();
    this.router.navigate(['login']);
    window.location.reload();
    
  }


}
