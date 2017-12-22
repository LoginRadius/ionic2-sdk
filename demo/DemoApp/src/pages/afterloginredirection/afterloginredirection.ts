import { Component } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';
import { ProfileUpdatePage } from '../profileupdate/profileupdate';
import { ChangePasswordPage } from '../changepassword/changepassword';
import { UpdatePhonePage } from '../updatephone/updatephone';
import { AddEmailPage } from '../addemail/addemail';
import { RemoveEmailPage } from '../removeemail/removeemail';
import { ChangeUsernamePage } from '../changeusername/changeusername';
import { AccountLinkingPage } from '../accountlinking/accountlinking';
import { ProfilePage } from '../profile/profile';



@Component({
  selector: 'page-afterloginredirection',
  templateUrl: 'afterloginredirection.html'
})
export class AfterLoginRedirectionPage{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService) {
 
   
  
  }
  getProfile() {
    this.navCtrl.push(ProfilePage);
  }

  getProfileUpdate() {
    this.navCtrl.push(ProfileUpdatePage);
  }
  getChangePassword() {
    this.navCtrl.push(ChangePasswordPage);
  }
  
 
  getUpdatePhone() {
    this.navCtrl.push(UpdatePhonePage);
  }
   getAddEmail() {
    this.navCtrl.push(AddEmailPage);
  }
  getRemoveEmail() {
    this.navCtrl.push(RemoveEmailPage);
  }
  
 
  
  getChangeUsername() {
    this.navCtrl.push(ChangeUsernamePage);
  }
  
   getAccountLinking() {
    this.navCtrl.push(AccountLinkingPage);
  }
  
  
 
  
  
   getLogout() {
   var response:any = {};
   this.myService.getLogout(response);
   response.callback = (params=> {
   if(params.response="true"){
   alert("You have successfully logged out");
   }
  this.navCtrl.pop();
  });
}
 
}
