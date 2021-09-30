import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './users/todo-list/todo-list.component';
import { TodoAddComponent } from './users/todo-add/todo-add.component';
import { TodoViewComponent } from './users/todo-view/todo-view.component';
import { TodoEditComponent } from './users/todo-edit/todo-edit.component';
import { TodoDeleteComponent } from './users/todo-delete/todo-delete.component';

const routes: Routes = [
  {path:'list', component:TodoListComponent},
  {path:'add', component:TodoAddComponent},
  {path:'view/:id', component:TodoViewComponent},
  {path:'edit/:id', component:TodoEditComponent},
  {path:'delete/:id', component:TodoDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
