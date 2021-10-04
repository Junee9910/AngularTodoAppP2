import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.scss']
})
export class TodoDeleteComponent implements OnInit {

  userId: string='';

  constructor(private activeRoute:ActivatedRoute, private userService:UserService, private _snackBar:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data=>{
      this.userId=data.id;
    });

    if(this.userId){
      this.userService.deleteUser(this.userId).subscribe(data=>{
        this._snackBar.open("User deleted successfully");
    }, err=>{
      this._snackBar.open("Unable to deleted user");
      })
    }
  }

}
