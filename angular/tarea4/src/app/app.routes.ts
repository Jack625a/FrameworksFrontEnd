import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { RegulationsComponent } from './components/regulations/regulations.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'regulations', component: RegulationsComponent },
    { path: 'contact', component: ContactComponent }
];
@NgModule({
  //  imports: [RouterModule.forRoot(routes)],
    //exports: [RouterModule]
  })
  export class AppRoutingModule { }