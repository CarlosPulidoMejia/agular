import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {


  listaElementos: string[] = ["Leche", "Carne", "Verdura", "Huevos"];
  cargando: boolean = false;

  ngOnInit(): void{

  }

  cambiarCargadno(){
    this.cargando = !this.cargando
  }

}
