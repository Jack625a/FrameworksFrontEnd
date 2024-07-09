import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { GaleriaComponent } from '../galeria/galeria.component';
@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [RouterLink,RouterOutlet,GaleriaComponent],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {

}
