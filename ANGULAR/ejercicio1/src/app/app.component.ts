import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
//Importar los componentes
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ProductosComponent } from './productos/productos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    BarraNavegacionComponent,
    GaleriaComponent,
    ProductosComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio1';
}
