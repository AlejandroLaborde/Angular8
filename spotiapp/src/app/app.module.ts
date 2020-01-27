import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SpotifiService } from './services/spotifi.service';
import { HomeComponent } from './componets/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavarComponent } from './componets/navar/navar.component';
import { LoadingComponent } from './componets/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavarComponent,
    LoadingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SpotifiService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
