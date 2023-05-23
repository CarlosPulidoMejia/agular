import { Component, OnInit, OnDestroy } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  //Creamos una lista de contactos
  listaContactos: IContacto [] = [];
  contactoSeleccionado: IContacto  | undefined;
  //Suscripción de servicio
  subscription: Subscription | undefined;

  constructor(private contactoService: ContactoService) {}

  ngOnInit():void{
    //Obtener la lista de contactos que nos brinda el servicio
    //this.listaContactos = this.contactoService.obtenerContactos();
    //console.table(this.listaContactos); 
    this.contactoService.obtenerContactos()
      .then((lista: IContacto[]) => this.listaContactos = lista)
      .catch((error) => console.error(`Ha habido un error al recuperar la lista, error: ${error}`))
      .finally(() => console.log('Petición de lista de contactos terminado'))
  }

  obtenerContacto(id: number){
    //console.log(`Obtener info de contacto: ${id}`);
    //this.contactoSeleccionado = this.contactoService.obtenerContactoPorId(id);
    // this.contactoService.obtenerContactoPorId(id)
    //   ?.then((contacto: IContacto) => this.contactoSeleccionado = contacto)
    //   .catch((error) => console.error(`Ha habido un error al recuperar el contacto, error: ${error}`))
    //   .finally(() => console.log('Petición de contacto terminado'))
    this.subscription = this.contactoService.obtenerContactoPorId(id)?.subscribe(
      (contacto: IContacto)=> this.contactoSeleccionado = contacto)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


}
