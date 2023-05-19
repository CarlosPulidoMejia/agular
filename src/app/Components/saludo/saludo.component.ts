import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit{

  @Input() nombre: string = "Anonimo";  
  //@Output () mensajeEmitter: EventEmitter string = new EventEmitter
    
  constructor() {}
  
  ngOnInit(): void {
    //Instrucciones previas a la renderización del componente
    console.log('ngOnInit del componente Saludo');
  }

  /*Ejemplo para festionar un even de tipo clic en el DOM */
  alertaSaludo(): void{
    alert(`Hola, ${this.nombre}. Alerta desde un clic de botón`)
  }

}
