import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
  ],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {
  colores=['Rojo','Verde','Azul','Amarillo','Lila'];
}
