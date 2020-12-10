import { Component, OnInit } from '@angular/core';
import { Usuario} from '../../clases/Usuario';
import {CargarScriptsService} from "./../../cargar-scripts.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private cargaScripts:CargarScriptsService) { 
    cargaScripts.carga(["usuario/usuario"]);

  }

  ngOnInit(): void {
  }

  user:Usuario = new Usuario(1,'luis','@email','123','asdas','12545',1,2);
}
