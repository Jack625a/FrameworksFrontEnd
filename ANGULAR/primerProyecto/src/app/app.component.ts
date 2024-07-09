import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { Prueba3Component } from './prueba3/prueba3.component';
import { CliksComponent } from './cliks/cliks.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PruebaComponent,Prueba2Component,Prueba3Component, CliksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primerProyecto';
}
