import { Component } from '@angular/core';
// import { ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { NavParams } from 'ionic-angular';
import { CaptureDrivingLicencePage } from '../capture-driving-licence/capture-driving-licence';
import { CheckLoginProvider } from '../../providers/check-login/check-login';



@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  

  //Initialising authentication variables
  name: string = "";
  password: string = "";
  public loggedIn: boolean = (localStorage.getItem("authKey") !== null);
  // Validation
  public signInButtonEnabled: boolean = false;
  public userNameEnteredAndValid: boolean = false;
  public passwordEnteredAndValid: boolean = false;

  // public rootPage: any = SignInPage;
  constructor(
    public navCtrl: NavController, 
    public checkLoginProvider: CheckLoginProvider// Authentication
  ) {

  }

  userData = {
    loggedIn: this.checkLoginProvider.isUserLoggedInObject.loggedIn,
    nameEmail: this.checkLoginProvider.isUserLoggedInObject.nameEmail,
    authKey: this.checkLoginProvider.isUserLoggedInObject.authKey
  }

  checkSignInButtonEnabled(usernameOrPassword){
    if(usernameOrPassword === "username"){
      // TODO do any further email/username validation here before returning true
      if(this.validateEmail(this.name)){
        console.log("Yes this is an email");
        this.userNameEnteredAndValid= true;   
      }else{
        console.log("no this is not an email");
        this.userNameEnteredAndValid= false;   
      }
         
    }
    
    if(usernameOrPassword === "password"){
      // TODO do any further password validation here before returning true
      if(this.password.length > 3){
        this.passwordEnteredAndValid = true;
      }else{
        this.passwordEnteredAndValid = false;
      }
    }

    if((this.userNameEnteredAndValid === true) && (this.passwordEnteredAndValid === true)){
      this.signInButtonEnabled = true;
    }else {
      this.signInButtonEnabled = false;
    }
  }

  validateEmail(inputText)  
  {  
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  if(inputText.match(mailformat))  
  {  

  return true;  
  }  
  else  
  {  
  return false;  
  }  
  }  

  // Built in ion method
  ionViewWillEnter(){
    //alert(this.checkLoginProvider.myData());
    this.loggedIn = (localStorage.getItem("authKey") !== null);
  }

  ionViewDidLoad(){
    // First check the current session state of the user
    // This method will:
    // 1) Check if an Auth key is present
    // 2) Check if this is the first time the app has been launched and start the 30 day timeout for session
    // 3) Reset state if token id older than 30 days
    this.checkLoginProvider.isUserLoggedIn();
    
    // Now that state has been checked, we create an object containing their info:

    // If logged in then push user straight to capture image.
    if(this.userData.loggedIn){
      // This is an example of how to push locally defined data
      //this.navCtrl.push(CaptureDrivingLicencePage, this.userData);
      // this.navCtrl.push(CaptureDrivingLicencePage);
      this.navCtrl.setPages([
        { page: CaptureDrivingLicencePage }
      ]);
    }
  }



  authenticateUser(){
    // Authenticate user here and then store their auth key and username in local storage
    // Input username = this.name
    // Input password = this.password
    localStorage.setItem("authKey", "fggfdsgfdsj7h474h74h739j39");
    localStorage.setItem("nameEmail", this.name);
    localStorage.setItem("authDate", Date());

    this.checkLoginProvider.isUserLoggedInObject.loggedIn = true;
    // this.navCtrl.push(CaptureDrivingLicencePage);
    this.navCtrl.setPages([
      { page: CaptureDrivingLicencePage }
    ]);
  }

  signOut(){
    this.checkLoginProvider.signUserOut()
  }
}
