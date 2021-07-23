import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpClient ){ } 

  ngOnInit(): void {
  }
  onWaterPlantClick(): void {
    console.log("clicked");
    this.http.get<any>('htttp://71.182.130.180').subscribe(data => {
        console.log(data);
    });

  }
}
