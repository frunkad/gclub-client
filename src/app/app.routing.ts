import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './core/auth.guard';
import { UnauthGuard } from './core/unauth.guard';

const routes: Routes = [

  {
    path: '', component: IndexLayoutComponent
  },
  {
    path: 'login', component: LoginLayoutComponent,  pathMatch:"full", canActivate: [UnauthGuard]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  },
  { path: '', component: HomeLayoutComponent,  children:[
    { path: 'dashboard', component: DashboardComponent, pathMatch: "full", canActivate:[AuthGuard],},
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
