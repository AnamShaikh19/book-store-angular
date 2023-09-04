import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorAdressComponent } from './components/author-adress/author-adress.component';
import { AddBookComponent } from '../public/components/add-book/add-book.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent,AuthorAdressComponent,
    
  ],
  imports: [ CommonModule,  RouterModule,   MaterialModule,HttpClientModule],
  exports:[ToolbarComponent,FooterComponent,MaterialModule,AuthorsComponent,AuthorAdressComponent,HttpClientModule]
})
export class SharedModule { }
