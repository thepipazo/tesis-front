export class NuevoUsuario {
    id: number;
    rut: string;
    nombre: string;
    apellido: string;
    nombreUsuario: string;
    password: string;
    roles: string;
    
    constructor(id : number,rut : string,nombre:string, apellido :string, nombreUsuario:string,password:string , roles : string){
        this.id = id;
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.roles = roles;
    } 

}