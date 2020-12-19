import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuprincipalComponent } from './modulos/menuprincipal/menuprincipal.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { LoginComponent } from './component/login/login.component';
import { DebilidadComponent } from './component/debilidad/debilidad.component';
import { RolGuardService as guard } from './guards/rol-guard.service';
import { UnidadComponent } from './component/unidad/unidad.component';
import { CriterioComponent } from './component/criterio/criterio.component';
import { ProcesoComponent } from './component/proceso/proceso.component';
import { RegistroComponent } from './component/registro/registro.component';
import { AmbitoGeograficoComponent } from './component/ambito-geografico/ambito-geografico.component';
import { AmbitoAcademicoComponent } from './component/ambito-academico/ambito-academico.component';




const routes: Routes = [
  { path: 'menu', component: MenuprincipalComponent ,canActivate: [guard], data: { expectedRol: ['dca','admin','director_docencia','responsable','user'] } },
  { path: 'debilidad', component: DebilidadComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'usuario', component: UsuarioComponent ,canActivate: [guard], data: { expectedRol: ['admin'] }},
  { path: 'unidad', component: UnidadComponent ,canActivate: [guard], data: { expectedRol: ['admin'] }},
  { path: 'login', component: LoginComponent },
  { path: 'criterio', component: CriterioComponent },
  { path: 'proceso', component: ProcesoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'ambito-geografico', component: AmbitoGeograficoComponent },
  { path: 'ambito-academico', component: AmbitoAcademicoComponent },



  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
