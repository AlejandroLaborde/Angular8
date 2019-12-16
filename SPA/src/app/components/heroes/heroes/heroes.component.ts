import { Component, OnInit } from '@angular/core';
import { HeroeService } from "../../../servicios/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  public heroes:any[]=[];

  constructor( private _heroeService:HeroeService ,
               private _router:Router) { }

  ngOnInit() {
    this.heroes=this._heroeService.getHeroes();
  }

  verHeroe(a:number){
    this._router.navigate(['/heroe',a]);
  }  

  mostrar(index) {
   console.log(index);
  }

  buscarHeroe(busqueda:string){
    console.log(busqueda);
  }




}
