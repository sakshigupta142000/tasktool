import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskComponent } from './components/dashboard/task/task.component';
import { ProjectComponent } from './components/dashboard/project/project.component';
import { SettingComponent } from './components/dashboard/setting/setting.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { AddTaskComponent } from './components/dashboard/add-task/add-task.component';
import { EditTaskComponent } from './components/dashboard/edit-task/edit-task.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddProjectComponent } from './components/dashboard/add-project/add-project.component';
import { EditProjectComponent } from './components/dashboard/edit-project/edit-project.component';
import { AddTaskcategoryComponent } from './components/dashboard/add-taskcategory/add-taskcategory.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    HomeComponent,
    SignupComponent,
    EmailComponent,
    SidebarComponent,
    DashboardComponent,
    TaskComponent,
    ProjectComponent,
    SettingComponent,
    ChangePasswordComponent,
    AddTaskComponent,
    EditTaskComponent,
    AddProjectComponent,
    EditProjectComponent,
    AddTaskcategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule, ReactiveFormsModule ,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
