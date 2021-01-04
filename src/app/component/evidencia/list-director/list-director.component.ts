import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evidencia } from 'src/app/clases/evidencia';
import { EvidenciaService } from 'src/app/servicios/evidencia/evidencia.service';

@Component({
  selector: 'app-list-director',
  templateUrl: './list-director.component.html',
  styleUrls: ['./list-director.component.css']
})
export class ListDirectorComponent implements OnInit {

  evidencias:Evidencia[];

  filtroUser:string;


  constructor(
    private evidenciaServicio:EvidenciaService,
    private ruta:Router) { }

  ngOnInit(): void {
    this.listarEvidencias();
  }

  listarEvidencias():void{
    this.evidenciaServicio.buscarPorEstadoDacAprobado().subscribe(resp =>{
      console.log(resp);
      this.evidencias = resp;
    })
  }


}
