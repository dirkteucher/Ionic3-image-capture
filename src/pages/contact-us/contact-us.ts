import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignInPage} from '../sign-in/sign-in';

// User authentication
import { CheckLoginProvider } from '../../providers/check-login/check-login';

@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html'
})
export class ContactUsPage {

  constructor(
    public navCtrl: NavController,
    public checkLoginProvider: CheckLoginProvider
  ) {
  }

  signOut(){
    this.checkLoginProvider.signUserOut();
    this.navCtrl.setPages([
      { page: SignInPage }
    ]);
  }
  
}
