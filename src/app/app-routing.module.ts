import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInComponentComponent } from'../app/check-in-component/check-in-component.component'
import { CheckOutComponentComponent } from '../app/check-out-component/check-out-component.component'
import { RoleSettingsComponent } from '../app/role-settings/role-settings.component'

const routes: Routes = [
  { path : '', redirectTo: '/checkin', pathMatch:'full'},
  { path : 'checkin', component:CheckInComponentComponent },
  { path : 'checkout', component:CheckOutComponentComponent },
  { path : 'rolesettings',redirectTo:'/rolesettings/display-role', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
