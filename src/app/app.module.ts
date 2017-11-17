import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CaptureDrivingLicencePage } from '../pages/capture-driving-licence/capture-driving-licence';
import { SignInPage } from '../pages/sign-in/sign-in';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { FormsModule } from '@angular/forms';

import { CheckLoginProvider } from '../providers/check-login/check-login';



@NgModule({
  declarations: [
    MyApp,
    CaptureDrivingLicencePage,
    SignInPage,
    ContactUsPage,
    TabsControllerPage

    // HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CaptureDrivingLicencePage,
    SignInPage,
    ContactUsPage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CheckLoginProvider
  ]
})
export class AppModule {}