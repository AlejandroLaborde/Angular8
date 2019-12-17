import { Component, OnInit } from '@angular/core';
import { HeroeService } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _servicios:HeroeService,
              private _router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(her)
  {
    this._router.navigate(['heroes',her]);
  }

}
