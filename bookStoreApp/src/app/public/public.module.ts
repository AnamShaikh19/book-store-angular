import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { BookcardComponent } from './components/bookcard/bookcard.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { AddBookComponent } from './components/add-book/add-book.component';




@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    PublicComponent,
    BookcardComponent,
    RecentBooksComponent,
    AddBookComponent,

  ],
  imports: [
    MatCardModule,
    CommonModule,
    PublicRoutingModule,
   
    SharedModule,   MaterialModule,  FormsModule

  ],

})
export class PublicModule { }
