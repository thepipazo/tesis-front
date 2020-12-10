import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuprincipalComponent} from './modulos/menuprincipal/menuprincipal.component';
import {UsuarioComponent} from './component/usuario/usuario.component';
import {RolComponent} from './component/rol/rol.component';


const routes: Routes = [
  {path: 'menu', component:MenuprincipalComponent},
  {path: '', component:MenuprincipalComponent, pathMatch: 'full'},
  {path: 'usuario', component:UsuarioComponent},
  {path: 'rol', component:RolComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
