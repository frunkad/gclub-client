import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  declarations: []
})
export class CoreModule { }
