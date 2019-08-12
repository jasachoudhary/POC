import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

const LOGIN_PAGE_ROUTES  = [
  {
    path:'',
    component: LoginComponent,
    // canActivate: [AuthGurd]
  }
]

@NgModule({
  imports: [RouterModule.forChild(LOGIN_PAGE_ROUTES)],
  exports: [RouterModule]
  // providers:[AuthGuard]
})
export class LoginRoutingModule { }
