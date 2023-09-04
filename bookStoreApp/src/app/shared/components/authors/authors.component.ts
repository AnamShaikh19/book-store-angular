import { AfterContentChecked, AfterContentInit, Component, DoCheck, EventEmitter, Input,ContentChild, OnChanges, OnInit, Output, SimpleChanges, OnDestroy } from '@angular/core';
import { AuthorsModel } from '../../models/authors.model';
import { AuthorAdressComponent } from '../author-adress/author-adress.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit,OnChanges, DoCheck,AfterContentInit,AfterContentChecked , OnDestroy{

  @ContentChild(AuthorAdressComponent) authoradress: AuthorAdressComponent;
  @Input() data: number;
  @Input() data2: boolean;
  @Input() authors: AuthorsModel;
  public ChildCounter: number=0;

  constructor(){
    console.log('Hello from child onstractor');

  } 
  ngOnDestroy(): void {
    console.log('Author component destroy');
  }
  
  ngAfterContentInit(): void {
    console.log('After content Init'+ this.authoradress?.adress);
  }
  ngAfterContentChecked(): void {
    console.log('After content check'+ this.authoradress?.adress);
  }
  ngDoCheck(): void {
    //console.log(this.authors)
  }
  ngOnChanges(changes: SimpleChanges): void {
   //console.log(changes);
  }
 
  ngOnInit(): void { 
    console.log('Hello from child ng on Init');
  }
  inCounter():void{
    this.ChildCounter++;
  }
}
function contentChild(): (target: AuthorsComponent, propertyKey: "data") => void {
  throw new Error('Function not implemented.');
}

