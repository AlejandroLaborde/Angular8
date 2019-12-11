import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { app_routing } from './app.routes';



//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { AboutComponent } from './components/about/about/about.component';
import { HomeComponent } from './components/home/home.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
