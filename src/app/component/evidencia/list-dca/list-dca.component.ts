import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evidencia } from 'src/app/clases/evidencia';
import { EvidenciaService } from 'src/app/servicios/evidencia/evidencia.service';

@Component({
  selector: 'app-list-dca',
  templateUrl: './list-dca.component.html',
  styleUrls: ['./list-dca.component.css']
})
export class ListDcaComponent implements OnInit {

  evidencias:Evidencia[];

  filtroUser:string;


  constructor(
    private evidenciaServicio:EvidenciaService,
    private ruta:Router) { }

  ngOnInit(): void {
    this.listarEvidencias();
  }

  listarEvidencias():void{
    this.evidenciaServicio.buscarPorEstadoDac().subscribe(resp =>{
      console.log(resp);
      this.evidencias = resp;
    })
  }


}
