import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
constructor(private _bookService: BookService){}
 
  ngOnInit(): void {
  }
saveBook(value:any):void{
 console.log(value);
  
  
 
  

  const book: BookModel= new BookModel();
  book.title=value.Title;
  book.author=value.Author;
  book.totalPages= value.Totalpages;
  book.price={
    currency:'$',
    value: value.Price}
  book.isPublished= value.isPublished;
  book.PublishOn= value.PublishOn;
  this._bookService.addBooks(book);

}

}






