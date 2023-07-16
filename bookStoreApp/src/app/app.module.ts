import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItsWorkComponent } from './how-its-work/how-its-work.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PublicModule } from './public/public.module';



 
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItsWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    UserModule,
    PublicModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
