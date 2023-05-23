import { Component, OnInit } from '@angular/core';
export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})

export class ListaBasicaComponent implements OnInit {


  listaElementos: Producto[] = [
    {
      nombre:"Leche",
      precio: 10,
      descripcion: "Leche entera"
    },
    {
      nombre:"Carne",
      precio: 20,
      descripcion: "Carne De puerco"
    }
  ];
  cargando: boolean = false;
  opcion: number = 0;

  ngOnInit(): void{

  }

  cambiarCargadno(){
    this.cargando = !this.cargando
  }

  escojeropcion(opcionEscogida: number){
    this.opcion = opcionEscogida //el valor cambia, implica un cambio en los elementos renderizados
  }

}
