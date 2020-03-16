import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {


  activarSpin : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public guardar(){

    

    setTimeout( ()=> this.activarSpin=false , 3000);
    this.activarSpin= !this.activarSpin;
  }


}