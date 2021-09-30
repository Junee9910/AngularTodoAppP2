import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoAddComponent,
    TodoEditComponent,
    TodoDeleteComponent,
    TodoViewComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class UsersModule { }
