import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CaptureDrivingLicencePage } from '../capture-driving-licence/capture-driving-licence';
import { SignInPage } from '../sign-in/sign-in';
import { ContactUsPage } from '../contact-us/contact-us';

import { CheckLoginProvider } from '../../providers/check-login/check-login';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = SignInPage;
  tab2Root: any = CaptureDrivingLicencePage;
  tab3Root: any = ContactUsPage;

  public loggedIn: boolean = (localStorage.getItem("authKey") !== null);

  constructor(
    public navCtrl: NavController,
    public checkLoginProvider: CheckLoginProvider// Authentication
  ) {
  }
  

  signOut(){
    this.checkLoginProvider.signUserOut()
  }

}
