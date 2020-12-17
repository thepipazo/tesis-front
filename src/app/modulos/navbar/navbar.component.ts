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


  realRol: string[] = [];
  rol: string;
  isRol:boolean = false;
  roles = this.tokenService.getAuthorities();

  constructor(
     private cargaScripts:CargarScriptsService,
     private tokenService: TokenService,
     private router: Router,
     ) { 
    cargaScripts.carga(["navbar/navbar"]);
  }

  ngOnInit(): void {

    console.log(this.tokenService.getAuthorities());

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

  consultaRol(expectedRol: string[]): boolean{

    this.roles.forEach(rol => {

      if (rol == "ROLE_ADMIN") {
        this.realRol.push('admin');
      } else if (rol == 'ROLE_DCA') {
        this.realRol.push('dca');
      } else if (rol == 'ROLE_DIRECCION_DE_DOCENCIA') {
        this.realRol.push('director_docencia');
      }else if (rol == 'ROLE_RESPONSABLE') {
        this.realRol.push('responsable');
      }else if (rol == 'ROLE_USER') {
        this.realRol.push('user');
      }

    });

      expectedRol.forEach(real => {
        if(this.realRol.indexOf(real) == -1){
         
         if(this.isRol == false){
           this.isRol = false;
 
         }
          
        }else{
         
         if(this.isRol == false){
 
           this.isRol = true;
 
         }
         
        }
         
       });
       
          this.realRol = [];
       return this.isRol;
    
    
  }


}
