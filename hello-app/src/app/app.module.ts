import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const myFirebaseConfig = {
  apiKey: "AIzaSyBKP4cOP508h0JLKmjFvzJooO0MqV8l4fU",
  authDomain: "project-5613440220430148247.firebaseapp.com",
  databaseURL: "https://project-5613440220430148247.firebaseio.com",
  storageBucket: "project-5613440220430148247.appspot.com",
  messagingSenderId: "122242095723"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
