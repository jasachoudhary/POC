import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export class RegistrationUser{
  email:string;
  password:string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registrationUser: RegistrationUser;

  constructor(public router: Router, public route:ActivatedRoute) { }

  ngOnInit() {
    this.registrationUser = new RegistrationUser();
    localStorage.setItem('redirectURL', this.route.snapshot.queryParams.redirectURL);
  }

  
}
