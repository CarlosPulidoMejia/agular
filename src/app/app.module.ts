import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaludoComponent } from './Components/saludo/saludo.component';
import { FormsModule } from '@angular/forms';
//Modulo personalizado que exporta componentes de tipo lista
import { ListModule } from './modules/list/list.module';
import { ListaContactosComponent } from './Components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './Components/forms/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importar modulo personalizado
    ListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
