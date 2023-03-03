import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './components/dashboard/add-project/add-project.component';
import { AddTaskComponent } from './components/dashboard/add-task/add-task.component';
import { AddTaskcategoryComponent } from './components/dashboard/add-taskcategory/add-taskcategory.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProjectComponent } from './components/dashboard/edit-project/edit-project.component';
import { EditTaskComponent } from './components/dashboard/edit-task/edit-task.component';
import { ProjectComponent } from './components/dashboard/project/project.component';
import { SettingComponent } from './components/dashboard/setting/setting.component';
import { TaskComponent } from './components/dashboard/task/task.component';
import { EmailComponent } from './components/email/email.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'home', component:HomeComponent,
    children:[
      {path: 'dashboard', component:DashboardComponent},
      {path: 'task', component:TaskComponent},   
      {path: 'project', component:ProjectComponent},
      {path: 'setting', component:SettingComponent},
      {path:'changepassword', component:ChangePasswordComponent},
      {path:'add-task', component:AddTaskComponent},
      {path:'edit-task', component:EditTaskComponent},
      {path:'edit-project', component:EditProjectComponent},
      {path:'add-project',component:AddProjectComponent},
      {path:'add-taskcategory', component:AddTaskcategoryComponent},
    ]
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
    pathMatch: 'full',
  },
  {
    path: 'email',
    component: EmailComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
