import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // MatFormFieldModule,
    LoginRoutingModule
  ],
  exports:[
    // MatFormField
  ]
})
export class LoginModule { }
