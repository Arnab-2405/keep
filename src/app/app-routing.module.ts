import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolidatedViewComponent } from './components/contentWindow/consolidated-view/consolidated-view.component';
import {LoginComponent} from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login' , component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'notes', component:ConsolidatedViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
