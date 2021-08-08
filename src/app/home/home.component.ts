import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated!: boolean;
  piGetResponse!: string;

  constructor(private http : HttpClient ,public oktaAuth: OktaAuthService){
  this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);}

  ngOnInit(): void {
  }
  onWaterPlantClick(): void {
    console.log("clicked");
    this.http.get('https://merag.hopto.org/app/',{responseType: 'text',headers: this.getHeaders()}).subscribe(data => {
        console.log(data);
        this.piGetResponse = data;
    });

  }

  getHeaders(): HttpHeaders {
    const accessToken = this.oktaAuth.getAccessToken();
    return new HttpHeaders().set('Authorization', 'Bearer ' + accessToken).set('Access-Control-Allow-Origin','*');
  }
}
