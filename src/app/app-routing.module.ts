import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuprincipalComponent } from './modulos/menuprincipal/menuprincipal.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { LoginComponent } from './component/login/login.component';
import { RolComponent } from './component/rol/rol.component';
import { RolGuardService as guard } from './guards/rol-guard.service';
import { UnidadComponent } from './component/unidad/unidad.component';




const routes: Routes = [
  { path: 'menu', component: MenuprincipalComponent ,canActivate: [guard], data: { expectedRol: ['dca','admin','director_docencia','responsable','user'] } },
  { path: 'rol', component: RolComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'usuario', component: UsuarioComponent ,canActivate: [guard], data: { expectedRol: ['admin'] }},
  { path: 'unidad', component: UnidadComponent ,canActivate: [guard], data: { expectedRol: ['admin'] }},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
