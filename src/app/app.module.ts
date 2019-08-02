import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CheckInComponentComponent } from './check-in-component/check-in-component.component';
import { CheckOutComponentComponent } from './check-out-component/check-out-component.component';
import { ProjectsService } from '../app/projects.service'
import { HttpClientModule} from '@angular/common/http';
import { RoleSettingsComponent } from './role-settings/role-settings.component'
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RoleBarComponent } from './role-bar/role-bar.component';
import { RoleCreatorComponent } from './role-creator/role-creator.component';
import { RoleDisplayComponent } from './role-display/role-display.component';
import { RateSettingComponent } from './rate-setting/rate-setting.component';
import { RoleDeleteComponent } from './role-delete/role-delete.component'
import { RolesRoutingModule } from './roles-routing/roles-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CheckInComponentComponent,
    CheckOutComponentComponent,
    RoleSettingsComponent,
    RoleBarComponent,
    RoleCreatorComponent,
    RoleDisplayComponent,
    RateSettingComponent,
    RoleDeleteComponent
  ],
  imports: [
    BrowserModule,
    RolesRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
