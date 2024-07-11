import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { PruebaComponent } from './prueba/prueba.component';
import { ProductosComponent } from './productos/productos.component';
import { ExamenComponent } from './examen/examen.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PruebaComponent,
    ProductosComponent,
    ExamenComponent,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  colores=['Rojo','Verde','Azul','Amarillo','Lila'];
}
