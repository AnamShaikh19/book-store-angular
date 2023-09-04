import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {
  private _pageTitle:string;
  public set pageTitle(value:string){
    this._pageTitle = value;
  }
  public get pageTitle(){
    return this._pageTitle;
  }

  public public: BookModel[]=[];

  constructor(public bookService: BookService){}

  ngOnInit(): void {
    this.pageTitle = "All Books"
    this.getAllBooks();
   const allBooks= this.bookService.getBooks();
  
    console.log(this.public);
  }
  private getAllBooks(): void{
    this.bookService.getBooks()
    .subscribe(books =>{
this.public=books;
    })
  }
  

}
