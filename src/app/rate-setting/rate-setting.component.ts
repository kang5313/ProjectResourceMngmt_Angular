import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { ProjectsService } from '../projects.service';
import { Role } from '../roles';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rate-setting',
  templateUrl: './rate-setting.component.html',
  styleUrls: ['./rate-setting.component.css']
})
export class RateSettingComponent implements OnInit {
  roleNameList : string[]
  displayMsg : string
  role : Role = {
    roleName : null,
    roleRate : null
  }

  private getRoleName(){
    this.projectsService.getRoleName()
    .subscribe(res=>{
      this.roleNameList = res['ROLES']
    })
  }

  constructor(private roleService:RoleService,private projectsService:ProjectsService) {
    this.getRoleName()
  }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.roleService.setRate(form.value)
    .subscribe(res=>{
      this.displayMsg = res['msg']
    })
    this.role.roleRate = null
  }

}