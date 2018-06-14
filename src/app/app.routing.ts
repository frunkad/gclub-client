import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponentComponent }   from './test-component/test-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/TestComponentComponent', pathMatch: 'full' },
  { path: 'TestComponentComponent', component: TestComponentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
