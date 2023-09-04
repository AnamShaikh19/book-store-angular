import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss']
})
export class BookcardComponent implements OnInit{
  @Input('allbook')  books:BookModel[];
 // get public(): BookModel[] {
//   return this._public;
 // }
 // set public (p : BookModel[]){
  //   p.map(x=>x.title= 'Title :' + x.title)
  //  this._public= p;
 // }
 // private _public :BookModel[];

  
constructor(){}
ngOnInit():void{
  
}
}
