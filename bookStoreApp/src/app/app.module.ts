import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './public-component/about-us/about-us.component';
import { HowItsWorkComponent } from './public-component/how-its-work/how-its-work.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './public-component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';




 
@NgModule({

  declarations: [ AppComponent,  AboutUsComponent, HowItsWorkComponent, HomeComponent,],
  imports: [

    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,

  //  AuthModule,
   // UserModule,
   // PublicModule,
    RouterModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    //MatToolbarModule,
   // MatIconModule,
   // MatButtonModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
