import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SinginComponent } from './components/singin/singin.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes=[
 
    {path:'login', component:LoginComponent},
    {path:'singin', component:SinginComponent},


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], 
   exports:[RouterModule],

})
export class AuthRoutingModule { }
