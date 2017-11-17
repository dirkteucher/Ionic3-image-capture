import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { SignInPage } from '../sign-in/sign-in';

import { CheckLoginProvider } from '../../providers/check-login/check-login';

import { LoadingController } from 'ionic-angular';

//Slides
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';

@Component({
  selector: 'page-capture-driving-licence',
  templateUrl: 'capture-driving-licence.html'
})
export class CaptureDrivingLicencePage {
  public base64Image: string;
  public imageSuccess: boolean = false;
  public username: string = (localStorage.getItem("nameEmail"));
  public loggedIn: boolean = (localStorage.getItem("authKey") !== null);

  //Slides
  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController, 
    private camera: Camera, 
    public navParams: NavParams,
    public checkLoginProvider: CheckLoginProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad(){
    console.log("Is user logged in? - ",this.checkLoginProvider.isUserLoggedInObject.loggedIn);
    console.log("User Auth Key - ",this.checkLoginProvider.isUserLoggedInObject.authKey);
    console.log("User NameEmail - ",this.checkLoginProvider.isUserLoggedInObject.nameEmail);
    // This is an example of how to get a local key sent over from sign-in.ts 
    //console.log(this.navParams.get("authKey"));
    
    // var file = "Test";
    
    //         var storageRef = firebase.storage().ref('companyName/'+Math.floor(Math.random()*1E16));
    
    //         var task = storageRef.put(file);
  }


  takePicture(){
    
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.imageSuccess = true;

        console.log(this.base64Image);
    }, (err) => {
        console.log(err);
    });
  }

    sendImage(){
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
      });
      loader.present();
    }

    //Slides
    goToSlide() {
      this.slides.slideTo(2, 500);
    }
    slideChanged() {
      let currentIndex = this.slides.getActiveIndex();
     // console.log('Current index is', currentIndex);
    }


    signOut(){
      this.checkLoginProvider.signUserOut();
      this.navCtrl.setRoot(SignInPage);
      this.navCtrl.popToRoot();
    }

    startAutoPlay(){
      this.slides.stopAutoplay();
    }



}