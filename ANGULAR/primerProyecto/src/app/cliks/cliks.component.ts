import { Component } from '@angular/core';

@Component({
  selector: 'app-cliks',
  standalone: true,
  imports: [],
  templateUrl: './cliks.component.html',
  styleUrl: './cliks.component.css'
})
export class CliksComponent {
  contador:number=0;

  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }
}
