import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroe:any={};
  constructor( private _activatedRoute:ActivatedRoute, private _HeroeService:HeroeService) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params =>{
      this.heroe=this._HeroeService.getHeroe(params['id']);
      console.log(this.heroe);
    })
  }

  


}
