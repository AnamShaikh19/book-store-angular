import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthorsModel } from 'src/app/shared/models/authors.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , AfterViewInit,AfterViewChecked, OnDestroy {
@ViewChild('btnCounter') btnCounter:ElementRef;
@ViewChild(AuthorsComponent) AuthorsComponent: AuthorsComponent;
public count: number=0;
 public test : boolean =false;
 public adress : string ="Paksitan"
 public obj:AuthorsModel ={id:10, name:'Anam'}
 private time:any;

  constructor(){
   // console.log('Hello from parent contractor ');

  }
  ngOnDestroy(): void {
    clearInterval(this.time);
    console.log('Home component destroy');
  }
  ngAfterViewChecked(): void {
   // console.log(this.AuthorsComponent.ChildCounter );
  }
    ngAfterViewInit(): void {
    console.log(this.btnCounter) 
    this.btnCounter.nativeElement.innerHTML="Button text update";
   }
 
  ngOnInit():void{
    console.log('Hello from parent ngOn Init ');
    this.timer();
  }
 public counter():void{
  this.count++;
  this.test = !this.test;
  this.obj.id=  this.count++;
  this.adress=this.adress+this.count
 }
 timer():void{
 this.time= setInterval(()=>{
this.count++; 
console.log(this.count);
  },1000)
 }
  }


