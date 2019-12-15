import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { AboutComponent } from './components/about/about/about.component';
import { HeroeComponent } from "./components/heroe/heroe.component";



const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', redirectTo: 'home' }
    
];
export const app_routing = RouterModule.forRoot(app_routes);
