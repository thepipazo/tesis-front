import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {Rol} from '../../clases/Rol';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RolService {

  private API_SERVER = "http://localhost:9090/rol/list";
  filtroRol='';

  constructor(private http: HttpClient) { 

  }

  public listarTodoLosRoles() : Observable<Rol>{
    return this.http.get<Rol>(this.API_SERVER);
     
   }

   public listarRolesPorId(id:number) : Observable<Rol>{
    return this.http.get<Rol>(this.API_SERVER +'/'+id );
     
   }
}
