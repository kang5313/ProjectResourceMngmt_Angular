import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service'
import { Role } from '../roles';

@Component({
  selector: 'app-role-display',
  templateUrl: './role-display.component.html',
  styleUrls: ['./role-display.component.css']
})
export class RoleDisplayComponent implements OnInit {
  roles : Role

  constructor(private roleService:RoleService) {
    this.roleService.getRoles()
    .subscribe(res=>{
      res['results'].sort((a,b)=>parseFloat(a.rate)-parseFloat(b.rate))
      this.roles = res['results']
    })
   }

  ngOnInit() {
  }

}