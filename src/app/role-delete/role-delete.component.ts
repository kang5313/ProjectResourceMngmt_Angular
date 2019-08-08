import { Component, OnInit } from '@angular/core';
import { Role } from '../roles';
import { RoleService } from '../role.service';
import { ProjectsService } from '../projects.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-role-delete',
  templateUrl: './role-delete.component.html',
  styleUrls: ['./role-delete.component.css']
})
export class RoleDeleteComponent implements OnInit {
  roles:Role
  displayMsg:string

  private getRoleName(){
    this.projectsService.getRoleName()
    .subscribe(res=>{
      this.roles = res['ROLES']
    })
  }

  constructor(private roleService:RoleService,private projectsService:ProjectsService) {
    this.getRoleName()
  }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.roleService.deleteRole(form.value)
    .subscribe(res=>{
      this.displayMsg = res['msg']
      this.getRoleName()
    })
    form.reset()
  }

}