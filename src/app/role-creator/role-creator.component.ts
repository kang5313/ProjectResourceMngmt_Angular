import { Component, OnInit } from '@angular/core';
import { Role } from '../roles';
import { RoleService } from '../role.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-role-creator',
  templateUrl: './role-creator.component.html',
  styleUrls: ['./role-creator.component.css']
})
export class RoleCreatorComponent implements OnInit {
  role:Role
  displayMsg:string
  errorMsg:boolean
  successMsg:boolean

  constructor(private roleService:RoleService) {
    this.role = this.roleService.initRole()
  }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    form.value['roleName'] = form.value['roleName'].toUpperCase()
    this.roleService.createRole(form.value)
    .subscribe(res=>{
      if(res['msgId']===1){
        this.errorMsg = true
        this.successMsg = false
        this.displayMsg = res['msg']
      }
      else if(res['msgId']===2){
        this.successMsg = true
        this.errorMsg = false
        this.displayMsg = res['msg']
      }
    },err=>{console.log(err)})
    form.reset()
  }
}