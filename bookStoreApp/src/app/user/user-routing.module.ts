import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';

const routes: Routes = [
  {
    path: 'user/:userid', 
    component: UserComponent,
     children :[
      {path: 'add-book', component: AddBookComponent},
      {path: 'delete-book', component: DeleteBookComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], 
   exports:[RouterModule],

})
export class UserRoutingModule { }
