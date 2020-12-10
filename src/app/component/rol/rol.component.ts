import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Rol } from 'src/app/clases/Rol';
import { RolService } from 'src/app/servicios/Rol/rol.service';


@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  page: number = 1;
  roles: any;
  buscador: any;
  filterpost = '';


  constructor(
    public rolServicio: RolService,
    public fb: FormBuilder
  ) {

  }

  ngOnInit(): void {

    this.rolServicio.listarTodoLosRoles().subscribe(resp => {
      this.roles = resp;
    }, error => { console.error(error) });

  
   
  }


  callType(value){

    
    this.rolServicio.listarRolesPorId(value).subscribe(resp =>{
      
      this.roles = resp;

      console.log(resp);

    }, error => { console.error(error) });
  }


}




