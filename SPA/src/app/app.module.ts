import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { app_routing } from './app.routes';

//servicios

import { HeroeService } from "./servicios/heroes.service";

//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { AboutComponent } from './components/about/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FiltrosComponent } from './components/filtros/filtros.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    AboutComponent,
    HomeComponent,
    HeroeComponent,
    FiltrosComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
