import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SinginComponent } from './components/singin/singin.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SinginComponent,
    ChangePasswordComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
