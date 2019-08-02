import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project'
import { ProjectsService } from '../projects.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-check-out-component',
  templateUrl: './check-out-component.component.html',
  styleUrls: ['./check-out-component.component.css']
})
export class CheckOutComponentComponent implements OnInit {

  roles : string[];  
  project : Project;
  displayMsg : string;
  errorMsg : boolean;
  successMsg : boolean;
  resource_usage : number;
  time : string;
  constructor(private projectsService: ProjectsService) { 
    this.project = this.projectsService.getProject()
    this.projectsService.getRoleName()
    .subscribe(res=>{
      this.roles = res['ROLES']
    })
  }

  ngOnInit() {
  }

  onSelectRole(role:string){
    this.project.check_in_role = role;
  }

  onSubmit(form:NgForm){
    this.projectsService.checkOut(form.value)
    .subscribe(res=>{
      if(res['msgId']===1){
        this.errorMsg = true;
        this.displayMsg = res['msg']
        this.successMsg = false;
      }
      else if(res['msgId']===2){
        this.successMsg = true;
        this.errorMsg = false;
        this.time = res['time'];
        this.displayMsg = res['msg'];
        this.resource_usage = res['resource']
      }
    },err=>{console.log(err)})
  }
  
  queryResource(form:NgForm){
    console.log(form.value)
    this.projectsService.queryResource(form.value)
    .subscribe(res=>{
      if(res['msgId']===1){
        this.errorMsg = true;
        this.displayMsg = res['msg']
        this.successMsg = false;
      }
      else if(res['msgId']===2){
        this.successMsg = true;
        this.errorMsg = false;
        this.time = res['time'];
        this.displayMsg = res['msg'];
        this.resource_usage = res['resource'];
      }
    },err=>{console.log(err)})
  }
}
