import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './Components/saludo/saludo.component';
import { FormsModule } from '@angular/forms';
//Modulo personalizado que exporta componentes de tipo lista
import { ListModule } from './modules/list/list.module';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importar modulo personalizado
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
