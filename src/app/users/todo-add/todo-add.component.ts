import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  addUserForm:FormGroup=new FormGroup({});

  constructor( private formBuilder:FormBuilder, private userSerice:UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm=this.formBuilder.group({
      'username':new FormControl(''),
      'email':new FormControl(''),
      'phone':new FormControl('')
    })
  }

  createUser(){
    //console.log(this.addUserForm.value);
    this.userSerice.addUser(this.addUserForm.value).subscribe(data=>{
      this._snackBar.open("User added successfully");
    }, err=>{
      this._snackBar.open("Unable to added user");
    })
  }

}
