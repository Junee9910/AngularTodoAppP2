import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

export interface User {
  name: string;
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: User[] = [];

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email','actions'];
  dataSource = ELEMENT_DATA;
  listUsers:User[]=[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data=>{
      this.listUsers=data;
    });
  }

}
