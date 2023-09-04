import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-adress',
  templateUrl: './author-adress.component.html',
  styleUrls: ['./author-adress.component.scss']
})
export class AuthorAdressComponent implements OnInit{
  @Input() adress: string;

constructor(){

}


  ngOnInit(): void {
  }

}
