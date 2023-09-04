import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './public-component/about-us/about-us.component';
import { HowItsWorkComponent } from './public-component/how-its-work/how-its-work.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public-component/home/home.component';





const routes: Routes=[
  {path:'', component:HomeComponent,pathMatch:'full'},

  {path:'about-us', component:AboutUsComponent},
  {path:'how-its-work', component:HowItsWorkComponent},
  {path:'auth',component:AuthComponent,loadChildren:()=> import('./auth/auth.module').then(x=>x.AuthModule)},
  {path:'public',component:PublicComponent,loadChildren:()=> import('./public/public.module').then(x=>x.PublicModule)},


  {path:'**', component:NotFoundComponent},

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ], 
   exports:[RouterModule],

})
export class AppRoutingModule { }
