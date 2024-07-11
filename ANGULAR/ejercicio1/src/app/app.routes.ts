import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {
        path:'productos',
        component:ProductosComponent
    },
    {
        path:'contactos',
        component:ContactoComponent
    },
    
];
