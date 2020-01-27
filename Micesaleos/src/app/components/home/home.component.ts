import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container main-container">


  <app-ng-style></app-ng-style>
  <hr>

  <app-css></app-css>


  <app-clases></app-clases>

  <p [appResaltado]= "'orange'">
    hola mundo
  </p>

  <app-ng-switch></app-ng-switch>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
