import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms'
import { Project } from '../project'
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-check-in-component',
  templateUrl: './check-in-component.component.html',
  styleUrls: ['./check-in-component.component.css']
})

export class CheckInComponentComponent implements OnInit {
  roles : string[];
  project : Project;
  errorMsg : boolean;
  successMsg : boolean;
  displayMsg : string;
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
    console.log(form.value)
    this.projectsService.checkIn(form.value)
    .subscribe(res=>{
      console.log(res['msgId'])
      if(res['msgId']===1){
        this.errorMsg = true;
        this.displayMsg = res['msg']
        this.successMsg = false;
      }
      else if(res['msgId']===2){
        this.successMsg = true;
        this.errorMsg = false;
        this.displayMsg = res['msg'];
      }
    },err=>{console.log(err)})
  }
}
