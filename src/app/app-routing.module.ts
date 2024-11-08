import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { ViewComponent } from './components/view/view.component';
import { AddemployeesComponent } from './components/addemployees/addemployees.component';
import { UpdateComponent } from './components/update/update.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent,pathMatch:'full',title:'login page'
  },
  {
    path:'signup',component:SignupComponent,pathMatch:'full',title:'sigup page'
  },
  {
    path:'view',component:ViewComponent,pathMatch:'full',title:'view deatils'
  },
  {

    path:'add',component:AddemployeesComponent,pathMatch:'full',title:'Add Employees'
  },
  {
    path:'update/:empId',component:UpdateComponent,pathMatch:'full',title:'update employees'
  
  },
  {

    path:'contactus',component:ContactusComponent,pathMatch:'full',title:'connnet Me'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
