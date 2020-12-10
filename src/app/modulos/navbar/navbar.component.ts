import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {CargarScriptsService} from "./../../cargar-scripts.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private cargaScripts:CargarScriptsService) { 
    cargaScripts.carga(["navbar/navbar"]);
  }

  ngOnInit(): void {
    
  }

}
