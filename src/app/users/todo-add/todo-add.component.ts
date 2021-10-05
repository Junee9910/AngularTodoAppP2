import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      'username':new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      'email':new FormControl('', [Validators.required, Validators.email]),
      'phone':new FormControl('', [Validators.required, Validators.maxLength(10)])
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
