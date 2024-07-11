import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-examen',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCardModule
  ],
  templateUrl: './examen.component.html',
  styleUrl: './examen.component.css'
})
export class ExamenComponent {
  semifinal:string='';
  final:string='';

  predecirSemifinal(semifinal:string){
    this.semifinal=semifinal;
  }
  predecirFinal(final:string){
    this.final=final;
  }
  lipiarPredicciones(){
    this.semifinal='';
    this.final='';
  }
  mandarResultado(){
    console.log('Predicciones Eurocopa Kevin Arroyo');
    console.log('Semifinal - Francia vs Paises Bajo:s '+ this.semifinal)
    console.log('Final - España vs Inglaterra: '+this.final);
  }
}
