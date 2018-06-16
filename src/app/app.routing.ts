import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponentComponent }   from './test-component/test-component.component';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { FireShieldGuard } from './fire-shield.guard';
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [

  {
    path: '', component: IndexLayoutComponent
  },
  {
    path: 'login', component: LoginLayoutComponent, data: {pageLogin: "yes"}, pathMatch:"full", canActivate:[FireShieldGuard]
  },
  { path: '', component: HomeLayoutComponent, canActivate:[FireShieldGuard], pathMatch:"full", children:[
    { path: 'dashboard', component: DashboardComponent, pathMatch: "full"},
    { path: '**', component: FourOhFourComponent, pathMatch: "full"}
  ]},
  {
    path: '**', component: FourOhFourComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
