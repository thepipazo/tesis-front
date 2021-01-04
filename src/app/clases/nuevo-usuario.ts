import { Rol } from "./Rol";
import { Unidad } from "./Unidad";

export class NuevoUsuario {
    id: number;
    rut: string;
    nombre: string;
    apellido: string;
    nombreUsuario: string;
    password: string;
    roles: any[];
    unidad: Unidad;

    
    constructor(id : number,rut : string,nombre:string, apellido :string, nombreUsuario:string,password:string , roles : any[], unidad : Unidad){
        this.id = id;
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.roles = roles;
        this.unidad = unidad;
    } 

}