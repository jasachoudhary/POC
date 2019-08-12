import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';

export class RegistrationUser{
  email:string;
  password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registrationUser: RegistrationUser;
  loginForm = new FormGroup({ 
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required) 
  });

  constructor(public router: Router, public route:ActivatedRoute) { }

  ngOnInit() {
    this.authConfirmRegistration('x', 'y')
    this.registrationUser = new RegistrationUser();
    console.log("registration", this.route)

    localStorage.setItem('redirectURL', this.route.snapshot.queryParams.redirectURL);
  }

  onSubmit(){
    console.log("hello jasa", this.loginForm.value)
    this.signupUser()
  }
  
  authConfirmRegistration(username, code) {

    Auth.confirmSignUp('jrchoudhary001@gmail.com', '874791', {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    }).then(data => {  })
      .catch(err =>{} );

  }

  signupUser(){
    if(this.loginForm.valid)
    {
      Auth.signUp(this.loginForm.value)
    } else{
      console.log("hello signup error")
    }

  }

}
