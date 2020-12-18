import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

id:number;
codigo:string;
nombre:string;
estado:boolean;

  refomat:string;

mostrar_boton:boolean;

  constructor() { }






  actualizar() {}

  eliminar(item:string ): void {}


  ver(proceso: null) { }

  listarTodos() {}

  create(): void {}

  reset() {}

  estadoEntrante(estado_unidad:boolean):string{ return null }


}
