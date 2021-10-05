import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  userId:any;
  userDetails:any;
  editUserForm:FormGroup=new FormGroup({});
  dataLoaded:boolean=false;

  constructor(private activateRoute:ActivatedRoute, private userService:UserService, private formBuilder:FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded=false;
    this.activateRoute.params.subscribe(data=>{
      this.userId=data.id;
    });

    if(this.userId !== ''){
      this.userService.viewUser(this.userId)
      .toPromise()
      .then(data=>{
        this.userDetails=data;
        Object.assign(this.userDetails,data);

        this.editUserForm=this.formBuilder.group({
          'name':new FormControl(this.userDetails.name),
          'email':new FormControl(this.userDetails.email)
        })
        this.dataLoaded=true;
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }

  updateUser(){
   this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(data=>{
    this._snackBar.open("User updated successfully");
  }, err=>{
    this._snackBar.open("Unable to updated user");
  })
  }
}
