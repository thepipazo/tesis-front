import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Rol } from 'src/app/clases/Rol';
import { RolService } from 'src/app/servicios/Rol/rol.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  page: number = 1;
  roles: Rol[];
  buscador: any;
  filtroRol='';
  rolForm:FormGroup;
  submitted = false;
  mostrar_boton = true;


  constructor(
    public rolServicio: RolService,
    public fb: FormBuilder,
    private cargaScripts:CargarScriptsService
  ) {

    cargaScripts.carga(["rol/rol"]);
  }

  ngOnInit(): void {

   
    this.rolForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      descripcion: ['']
    
    });

    

    this.rolServicio.listarTodoLosRoles().subscribe(resp => {
      this.roles = resp;
    }, error => { console.error(error) });

  
   
  }



  create(): void{
   
    this.rolServicio.create(this.rolForm.value).subscribe(rol => {     
      this.roles.push(rol); 
      this.rolForm.reset();
      swal.fire('Guardado', `El rol ${rol.rolNombre} ha sido creado con exito`,'success');
    });
  
  }


  ver(rol:Rol): void {
    
    this.rolForm.setValue({
    id:rol.id,
    nombre: rol.rolNombre,
    })
    this.mostrar_boton=false;
}

editar(){

  this.rolServicio.actualizar(this.rolForm.value).subscribe(rol =>{
   
    this.rolServicio.listarTodoLosRoles().subscribe(resp => {
      this.roles = resp;
    }, error => { console.error(error) });


  
    swal.fire('Actualizado', `El rol ${rol.rolNombre} ha sido actualizado con exito`,'success');
    this.rolForm.reset();
    this.mostrar_boton = true;

  })

}
reset(){
  this.rolForm.reset();
  this.mostrar_boton = true;
}




eliminar(rol:Rol): void {
   
  swal.fire({
    title: '¿Seguro que desea eliminar?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.rolServicio.eliminar(rol.id).subscribe(resp => {
        console.log(resp)
        swal.fire('Eliminado', `El rol ${rol.rolNombre} ha sido eliminado con exito`,'success');

        this.rolServicio.listarTodoLosRoles().subscribe(resp => {
          this.roles = resp;
        }, error => { console.error(error) });

      })
     
    }
  })
  /*this.rolServicio.eliminar(rol).subscribe(resp => {
    console.log(resp)
    
  })*/
}



 comprobarCamposVacios(): boolean {
  if(this.rolForm.value.id == "" || this.rolForm.value.nombre == ""){
    return true;
  }else{
    return false;
  }

}
}


