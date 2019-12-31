import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders , HttpParams } from '@angular/common/http';
import { map, reduce, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifiService {

  private client_id: string ="7d6c57b875a84f7fbc991655c6f8011d";
  private client_secret : string = "5269f3783b954fce8f7096b35a4970dd";
  private Authorization:string ="Bearer BQCNNYm79mZBpIE5YCVyS8UUxTeZokQcIPgbqcX21N6RHndLo_G4crbMGvRYkYehI7GFztZiSvwcgIfK3pgynxW1MFvN9wjDcMI4XSn8_nFuBzfPoXAHfvC0BRDYQa1kUTCtXu8f0CYF";


  constructor( private http:HttpClient ) { 

    console.log("corriendo el servicio");
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

    return this.http.post('https://accounts.spotify.com/api/token', info.toString() , {headers: headers})
              .pipe( map( data=>{
                return data["access_token"];
              }))
              
    }
}
