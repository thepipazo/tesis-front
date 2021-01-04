import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evidencia } from 'src/app/clases/evidencia';
import { NuevoUsuario } from 'src/app/clases/nuevo-Usuario';
import { AuthService } from 'src/app/servicios/authentication/auth.service';
import { TokenService } from 'src/app/servicios/authentication/token.service';
import { EvidenciaService } from 'src/app/servicios/evidencia/evidencia.service';

@Component({
  selector: 'app-list-responsable',
  templateUrl: './list-responsable.component.html',
  styleUrls: ['./list-responsable.component.css']
})
export class ListResponsableComponent implements OnInit {
  usuario:NuevoUsuario;
  evidencias:Evidencia[];

  filtroUser:string;


  constructor(
    private evidenciaServicio:EvidenciaService,
    private ruta:Router,
    private usuarioService:AuthService,
    private token:TokenService) { }

  ngOnInit(): void {

    this.usuarioService.buscarPorEmail(this.token.getUserName()).subscribe(resp =>{
      this.usuario = resp;
      console.log(resp);
      console.log(this.usuario);

      if(this.usuario != null){
        this.listarEvidencias(this.usuario.unidad.id);
  
      }
    });


  }

  listarEvidencias(id:number):void{
    this.evidenciaServicio.buscarPorUnidad(id).subscribe(resp =>{
      console.log(resp);
      this.evidencias = resp;
    })
  }

}
