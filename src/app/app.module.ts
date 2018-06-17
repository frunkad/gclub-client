import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { TestComponentComponent } from './test-component/test-component.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SuiModule, SuiSidebarModule } from 'ng2-semantic-ui';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component'; // #RemoveSemantic
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CoreModule } from './core/core.module';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthGuard } from './core/auth.guard';
import { UnauthGuard } from './core/unauth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeLayoutComponent,
    DashboardComponent,
    LoginLayoutComponent,
    IndexLayoutComponent,
    FourOhFourComponent
  ],
  imports: [
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SuiSidebarModule,
    CoreModule

  ],
  providers: [AuthGuard,UnauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
