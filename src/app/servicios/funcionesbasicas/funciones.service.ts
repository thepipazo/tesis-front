import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

id:number;
codigo:string;
nombre:string;
estado:boolean;

mostrar_boton:boolean;
  constructor() { }

  actualizar() {}
  
  eliminar(item:string ): void {}

  ver(proceso: null) {

    this.id = null;
    this.codigo = null;
    this.nombre = null;
    this.estado = null;
    this.mostrar_boton = true;

  }


}
