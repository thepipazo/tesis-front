import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/authentication/auth.service';
import { TokenService } from 'src/app/servicios/authentication/token.service';
import { NuevoUsuario } from '../../clases/nuevo-Usuario';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RolService } from 'src/app/servicios/Rol/rol.service';
import { Rol } from 'src/app/clases/Rol';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  isRegistro = false;
  usuarios: NuevoUsuario[] = [];
  isRegistroFail = false;
  userId : number;
  userRut: string;
  nuevoUsuario: NuevoUsuario;
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  password: string;
  errMsj: string;
  isLogged = false;
  mostrar_boton = true;
  filtroUser = '';
  roles: Rol[];
  rolesSeleccionados :string;
  isRoles = false;

  rolesPrecargados:  string;
  
 
  constructor(
    private cargaScripts: CargarScriptsService,
    private tokenService: TokenService,
    private authservice: AuthService,
    private router: Router,
    public fb: FormBuilder,
    public rolService: RolService,

  ) {
    cargaScripts.carga(["usuario/usuario"]);
  

  }

  ngOnInit(): void {

   

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.listarUsuarios();
      this.listarRoles();
    }

  }

 
  compararNombres( rol:Rol, rol2:any) {
    if (rol==null || rol2==null) {
      return false;
    }
    return rol.rolNombre===rol2.rolNombre;
  }

activarRoles(): void{
  if(this.isRoles){
    this.isRoles = false;

  }else
  this.isRoles = true;
}

  onRegistro(): void {
    this.nuevoUsuario = new NuevoUsuario(this.userId,this.userRut, this.nombre, this.apellido, this.nombreUsuario, this.password,this.rolesSeleccionados);
    this.authservice.nuevo(this.nuevoUsuario).subscribe(data => {
      this.authservice.listarTodoLosUser().subscribe(resp => {
        this.usuarios = resp;
      }, error => { console.error(error) });
      swal.fire('Guardado', `El usuario ${this.nuevoUsuario.nombre} ha sido creado con exito`, 'success');

      this.reset();

    },
      err => {
        this.errMsj = err.error.mensaje;
        swal.fire('Error', ` ${this.errMsj}`, 'warning');




      }

    );
    console.log(this.nuevoUsuario);
  }



  ver(usuario: NuevoUsuario): void {

    this.userRut = usuario.rut;
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    this.password = usuario.password;
    this.userId = usuario.id;
    this.nombreUsuario = usuario.nombreUsuario;
    this.mostrar_boton = false;
    this.rolesPrecargados = usuario.roles;
  }


  listarUsuarios(): void {
    this.authservice.listarTodoLosUser().subscribe(resp => {
      this.usuarios = resp;
    }, error => { console.error(error) });

  }

  listarRoles(): void {
    this.authservice.listarTodoLosRoles().subscribe(resp => {
      this.roles = resp;
      console.log(resp);
    })

  }

  reset() {
    this.userRut = "";
    this.nombre = "";
    this.apellido = "";
    this.nombreUsuario = "";
    this.password = "";
    this.userId = null;
    this.mostrar_boton = true;
  }

  editar() {
    this.nuevoUsuario = new NuevoUsuario(this.userId,this.userRut, this.nombre, this.apellido, this.nombreUsuario, this.password,this.rolesSeleccionados);
    console.log(this.nuevoUsuario);
    this.authservice.actualizar(this.nuevoUsuario).subscribe(usuario => {
      this.authservice.listarTodoLosUser().subscribe(resp => {
        this.usuarios = resp;
      });

      swal.fire('Actualizado', `El usuario  ha sido actualizado con exito`, 'success');
      this.reset();
      this.mostrar_boton = true;


    });
  }


  eliminar( usuario : NuevoUsuario): void{
    swal.fire({
      title: '¿Seguro que desea eliminar?',
      text: "El usuario con el rut: "+usuario.rut+" sera eliminado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authservice.eliminar(usuario.id).subscribe(resp => {
          console.log(resp)
          swal.fire('Eliminado', `El usuario ${usuario.nombre} ha sido eliminado con exito`,'success');
  
          this.authservice.listarTodoLosUser().subscribe(resp => {
            this.usuarios = resp;
          }, error => { console.error(error) });
  
        })
       
      }
    })
  }


}
