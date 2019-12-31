import { Component, OnInit } from '@angular/core';
import { SpotifiService } from 'src/app/services/spotifi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor( private servicioSpotify: SpotifiService) { 
    this.servicioSpotify.getAuthentification().subscribe(respuesta=>{
        console.log(respuesta);
    });
  }


}
