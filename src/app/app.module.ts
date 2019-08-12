import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './shared/login/login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
import Interactions from '@aws-amplify/interactions';
import Storage from '@aws-amplify/storage';
import { SignupComponent } from './shared/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    AmplifyAngularModule
  ],
  providers: [
    AmplifyService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
