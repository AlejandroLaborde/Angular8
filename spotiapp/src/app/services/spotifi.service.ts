import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders , HttpParams } from '@angular/common/http';
import { map, reduce, filter } from 'rxjs/operators';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SpotifiService {
  
  private URLtoken= "https://accounts.spotify.com";
  private URLconsultas = "https://api.spotify.com";
  private client_id: string ="7d6c57b875a84f7fbc991655c6f8011d";
  private client_secret : string = "5269f3783b954fce8f7096b35a4970dd";
  private Authorization : string;
  

  constructor( private http:HttpClient ) { 
   
        this.getAuthentification().subscribe(respuesta=>{
          this.Authorization=respuesta;
        },fallo=>{
          this.Authorization="FALLO AL ASIGNAR TOKEN";
          console.log("fallo get TOKEN");
        });

  }


  getNewReleases(){
      let headers= new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization' : 'Bearer ' + this.Authorization
      });
      return this.http.get(this.URLconsultas +"/v1/browse/new-releases",{headers});
  }

  getAuthentification(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let data = {      
      "client_id": this.client_id,
      'client_secret':this.client_secret
    }

    let info = new URLSearchParams(); 
    info.append("grant_type",'client_credentials');
    info.append("client_id",this.client_id);
    info.append("client_secret",this.client_secret);

    return this.http.post(this.URLtoken+"/api/token", info.toString() , {headers: headers})
              .pipe( map( data=>{
                return data["access_token"];
              }))
    }
}
