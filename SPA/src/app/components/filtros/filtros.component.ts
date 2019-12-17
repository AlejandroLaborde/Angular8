import { Component, OnInit } from '@angular/core';
import { HeroeService } from 'src/app/servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes/heroes.component'

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  public heroesFiltrados=[];
  constructor(private _servicios:HeroeService,
              private _routed:ActivatedRoute,
              private _rutas:Router) { }

  ngOnInit() {
    let parametros= this._routed.params;
    parametros.subscribe(params=>{
      this.heroesFiltrados=this._servicios.filtrarHeroes(params['paramBusqueda']);
    })
  }

  verHeroe( idx:number) {
     this._rutas.navigate(['/heroe',idx]);  
    }
}
