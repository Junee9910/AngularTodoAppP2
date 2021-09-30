import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  listUsers:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.listUsers=this.userService.listUsers().subscribe(data=>{
      this.listUsers=data;
    });
  }

}
