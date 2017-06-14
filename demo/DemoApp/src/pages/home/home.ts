import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  

  
  }
  getLoginPage() {
    this.navCtrl.push(LoginPage);
  }
  getRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }
  
 
  
  getForgotpasswordPage() {
    this.navCtrl.push(ForgotpasswordPage);
  }

}
