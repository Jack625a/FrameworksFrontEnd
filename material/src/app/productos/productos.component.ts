import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
interface Producto{
  nombre: string;
  imagenUrl:string;
  precio:number;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[]=[
    {
      nombre:'Producto 1',
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/c/e/celular_realme_11_5g_8_256gb_negro.jpg',
      precio:3850
    },{
      nombre:'Producto 2',
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/c/e/celular_realme_11_5g_8_256gb_negro.jpg',
      precio:1550
    },{
      nombre:'Producto 3',
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/c/e/celular_realme_11_5g_8_256gb_negro.jpg',
      precio:4850
    },{
      nombre:'Producto 4',
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/c/e/celular_realme_11_5g_8_256gb_negro.jpg',
      precio:2850
    },{
      nombre:'Producto 5',
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/c/e/celular_realme_11_5g_8_256gb_negro.jpg',
      precio:4050
    },{
      nombre:'Producto 6',
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/c/e/celular_realme_11_5g_8_256gb_negro.jpg',
      precio:3050
    },
  ];
}
