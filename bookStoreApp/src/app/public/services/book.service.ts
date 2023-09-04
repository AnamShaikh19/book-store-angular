import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({"providedIn": "root"})
export class BookService {


  constructor(private _httpClient :HttpClient) { }


public addBooks(BookModel : BookModel):Observable<BookModel> { 

  return this._httpClient.post<BookModel>('https://localhost:7256/api/books',BookModel);

}


  public getBooks():Observable<BookModel[]>{
    return this._httpClient.get<BookModel[]>('https://localhost:7256/api/books');

 }
 
    
          
        }