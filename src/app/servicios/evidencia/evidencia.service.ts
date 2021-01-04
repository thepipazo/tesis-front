import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Evidencia } from 'src/app/clases/evidencia';
import { NuevoUsuario } from 'src/app/clases/nuevo-Usuario';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EvidenciaService {

  private API_SERVER = "http://localhost:9090/formulario";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  create(evidencia: Evidencia) : Observable<Evidencia>{
    return this.http.post(this.API_SERVER+"/guardar",evidencia,{headers: this.httpHeaders}).pipe(
      map((response:any) => response.evidencia as Evidencia ),
      catchError(e =>{
        Swal.fire(e.error.mensaje,'','error');
        return throwError(e);
      })
    );
  }

  

  actualizar(evidencia: Evidencia) : Observable<Evidencia>{
    return this.http.put(this.API_SERVER+"/editar/",evidencia,{headers: this.httpHeaders}).pipe(
      map((response:any) => response.evidencia as Evidencia ),
      catchError(e =>{
        Swal.fire(e.error.mensaje,'','error');
        return throwError(e);
      })
    );
  }

  eliminar(id: number) : Observable<any>{
    return this.http.delete(this.API_SERVER+"/delete/"+id,{headers: this.httpHeaders}).pipe(
      map((response:any) => response.evidencia as Evidencia ),
      catchError(e =>{
        Swal.fire(e.error.mensaje,'','error');
        return throwError(e);
      })
    );
  }

  public  listarTodos() : Observable<Evidencia[]>{
    return this.http.get<Evidencia[]>(this.API_SERVER+"/list");

   }
   public  buscarPorId(id:number) : Observable<Evidencia>{
    return this.http.get<Evidencia>(this.API_SERVER+"/list/"+id);

   }

   public  buscarPorUsuario(user:number) : Observable<Evidencia[]>{
    return this.http.get<Evidencia[]>(this.API_SERVER+"/listPorUsuario/"+user);
    
   }

   public  buscarPorUnidad(uni:number) : Observable<Evidencia[]>{
    return this.http.get<Evidencia[]>(this.API_SERVER+"/listPorUnidad/"+uni);
    
   }

   public  buscarPorEstadoDac() : Observable<Evidencia[]>{
    return this.http.get<Evidencia[]>(this.API_SERVER+"/listPorEstadoDacEspera");
    
   }
   public  buscarPorEstadoDacAprobado() : Observable<Evidencia[]>{
    return this.http.get<Evidencia[]>(this.API_SERVER+"/listPorEstadoDacAprobado");
    
   }
  
}
