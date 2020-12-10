import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modulos/navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
