import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  nombre = "Alejandro";
  arregloNumeros: number[] =[1,2,3,4,5,6,7,8,9,10];
  PI:Number= Math.PI;

  sueldo=46000.55;

  palabra="ALEJANDRO";
  mostrar=false;


}
