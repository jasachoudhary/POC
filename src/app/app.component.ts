import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarBooking';
  url:string; 
  loading:boolean =false;

  constructor(public router:Router){

    console.log("app component", router)
 
  }
}
