import { Injectable, OnInit } from '@angular/core';

//Importamos la lista de contactos MOCK

import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

//Importamos observable de rxjs
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService implements OnInit {
  [x: string]: any;
  constructor() {}
  ngOnInit(): void {
    interval(1000).subscribe((value)=>console.log(value));
  }

  obtenerContactos(): Promise<IContacto[]> {
  //  //return CONTACTOS //Nos devuelve un listado de contactos
    return Promise.resolve(CONTACTOS);
  }

  // obtenerContactoPorId(id: number): Promise<IContacto> | undefined{
  //   //Buscamos el contacto por ID dentro de la lista de CONTACTOS mockeados
  //   const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id);
  //   if(contacto){
  //     return Promise.resolve(contacto);
  //   }else{
  //     return;
  //   }
  // }
  obtenerContactoPorId(id: number): Observable<IContacto> | undefined {
    //Buscamos el contacto por ID dentro de la lista de CONTACTOS mockeados
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id);
    //Creamos un observable
    let observable = new Observable<IContacto>(observer => {
      observer.next(contacto);//Emitir un valor a todo componente suscrito
      observer.complete();//No emitimos más valores
    })
    if (contacto) {
      return observable;
    } else {
      return;
    }
  }
}
