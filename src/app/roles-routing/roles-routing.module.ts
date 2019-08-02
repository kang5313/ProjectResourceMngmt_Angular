import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleSettingsComponent } from '../role-settings/role-settings.component';
import { RoleCreatorComponent } from '../role-creator/role-creator.component';
import { RoleDisplayComponent } from '../role-display/role-display.component';
import { RoleDeleteComponent } from '../role-delete/role-delete.component';
import {RateSettingComponent } from '../rate-setting/rate-setting.component'

const roleRoutes : Routes = [
    { path: 'rolesettings',component:RoleSettingsComponent,children:[
      {path: 'create-role',component:RoleCreatorComponent},
      {path: 'display-role',component:RoleDisplayComponent},
      {path: 'delete-role',component:RoleDeleteComponent},
      {path: 'set-rate',component:RateSettingComponent}
    ] }  
]

@NgModule({
  imports: [RouterModule.forChild(roleRoutes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
