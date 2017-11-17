import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CheckLoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CheckLoginProvider {

  constructor() {
    
  }
  isUserLoggedInObject = {
    loggedIn: (localStorage.getItem("authKey") !== null),
    authKey:  "",
    nameEmail: ""
  };
  isUserLoggedIn(){
    // FIrst check whether an auth key is present
    if(localStorage.getItem("authKey") !== null){
      this.isUserLoggedInObject.authKey = localStorage.getItem("authKey");
      this.isUserLoggedInObject.nameEmail = localStorage.getItem("nameEmail");
      //If no date is set then set the date for future authentication checks 
      if(localStorage.getItem("authDate") === null){
        localStorage.setItem("authDate", Date());
      }
      // If date > 30 days then reset back to current date
      let lastDateHere = Date.parse(localStorage.getItem("authDate"));
      if(this.checkIfGreaterThan30Days(lastDateHere) >= 30){
        localStorage.setItem("authDate", Date());
        //TODO user needs to sign in again
      }           
    }
  }
  
  checkIfGreaterThan30Days(lastDateHere){
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - lastDateHere);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return(diffDays);
  }

  signUserOut(){
    alert("You have been signed out");
    localStorage.setItem("authKey","");
    localStorage.setItem("nameEmail","");
    localStorage.setItem("authDate","");
    this.isUserLoggedInObject.loggedIn = false;
  }

}
