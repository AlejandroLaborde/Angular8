import { Component, OnInit } from '@angular/core';
import { SpotifiService } from 'src/app/services/spotifi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  
  private albums=[];
  servicioCorriendo:boolean;

  
  constructor( private servicioSpotify: SpotifiService) { 
    this.servicioCorriendo=false;
    setTimeout(() => {
      this.servicioSpotify.getNewReleases().subscribe((data:any)=>{
        this.albums= data.albums.items;
        console.log(this.albums);
        this.servicioCorriendo=true;
      });
    }, 1500);

  }

}
