import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  imagenesSlide:number=0;
  slides:HTMLElement[]=[];

  vistaSlides(){
    this.slides=Array.from(document.querySelectorAll('.slide'));
    this.abrirSlide(this.imagenesSlide)
  }
  abrirSlide(index:number){
    this.slides.forEach((slide, i)=>{
      slide.classList.toggle('activo', i===index);
    });
  }

  anteriorSlide(){
    this.imagenesSlide=(this.imagenesSlide>0)?this.imagenesSlide-1: this.slides.length-1;
    this.abrirSlide(this.imagenesSlide);
  }
  siguienteSlide(){
    this.imagenesSlide=(this.imagenesSlide<this.slides.length-1)? this.imagenesSlide+1:0;
    this.abrirSlide(this.imagenesSlide);
  }
}
