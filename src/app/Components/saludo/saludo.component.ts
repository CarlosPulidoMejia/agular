import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges{

  @Input() nombre: string = "Anonimo";  
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();
  
  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeigth: 'bold',
  }


  constructor() {}

  ngOnInit(): void {
    //Instrucciones previas a la renderización del componente
    console.log('ngOnInit del componente Saludo');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Valor anterior', changes['nombre'].previousValue);
    console.log('Valor final', changes['nombre'].currentValue);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy El componente va a desaparecer');
  }

  /*Ejemplo para festionar un even de tipo clic en el DOM y enviar un texto al componente padre*/
  enviarMensajeAlPadre(): void{
    /*alert(`Hola, ${this.nombre}. Alerta desde un clic de botón`)*/
    this.mensajeEmitter.emit(`Hola, ${this.nombre}. Alerta desde un clic de botón`);
  }
}

// Orden del ciclo de vida de los componentes
// * 1. ngOnChanges
// * 2. ngOnInit
//   3. ngAfterContentInit
//   4. ngAfterContenChecked
//   5. ngAfterViewInit
//   6. ngAfterViewChecked
//   7. ngAfterContenChecked
//   8. ngAfterViewChecked
// * 9. ngOnDestroy