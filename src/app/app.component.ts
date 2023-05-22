import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = 'cpulido';

  /* Esta función se ejecuta cuando en el hijo (Saludo Component), se pulsa un botón*/
  recibirMensajeDelHijo(evento: string){
    alert(evento);
  }
}
