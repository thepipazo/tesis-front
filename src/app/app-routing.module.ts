import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuprincipalComponent } from './modulos/menuprincipal/menuprincipal.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { LoginComponent } from './component/login/login.component';
import { RolComponent } from './component/rol/rol.component';
import { RolGuardService as guard } from './guards/rol-guard.service';



const routes: Routes = [
  { path: 'menu', component: MenuprincipalComponent },
  { path: 'rol', component: RolComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
