import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TestComponentComponent } from './test-component/test-component.component';
// import { APP_ROOT } from '@angular/core/src/di/scope';

import { AuthService } from './auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SuiModule, SuiSidebarModule } from 'ng2-semantic-ui';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component'; // #RemoveSemantic
import { DashboardComponent } from './dashboard/dashboard.component';
import { FireShieldGuard } from './fire-shield.guard';
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { UserService } from './user.service';
@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    LoginComponent,
    HomeLayoutComponent,
    DashboardComponent,
    LoginLayoutComponent,
    IndexLayoutComponent,
    FourOhFourComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SuiSidebarModule,

  ],
  providers: [AuthService,FireShieldGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
