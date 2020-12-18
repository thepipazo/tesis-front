import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modulos/navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { interceptorProvider } from './interceptor/rol-interceptor.service';


//inicio servicio
import { CargarScriptsService} from "./cargar-scripts.service";
import { MenuprincipalComponent } from './modulos/menuprincipal/menuprincipal.component';
import { from } from 'rxjs';
import { FooterComponent } from './modulos/footer/footer.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { RolComponent } from './component/rol/rol.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroPipe } from './pipes/filtro.pipe';
import { LoginComponent } from './component/login/login.component';
import { UnidadComponent } from './component/unidad/unidad.component';
import { CriterioComponent } from './component/criterio/criterio.component';
import { ProcesoComponent } from './component/proceso/proceso.component';
import { RegistroComponent } from './components/registro/registro.component';



//fin servicio

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuprincipalComponent,
    FooterComponent,
    UsuarioComponent,
    RolComponent,
    FiltroPipe,
    LoginComponent,
    UnidadComponent,
    CriterioComponent,
    ProcesoComponent,
    RegistroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [
    CargarScriptsService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
