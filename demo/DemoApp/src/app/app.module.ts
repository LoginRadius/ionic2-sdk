import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { AfterLoginRedirectionPage } from '../pages/afterloginredirection/afterloginredirection';
import { ProfileUpdatePage } from '../pages/profileupdate/profileupdate';
import { ChangePasswordPage } from '../pages/changepassword/changepassword';
import { UpdatePhonePage } from '../pages/updatephone/updatephone';
import { AddEmailPage } from '../pages/addemail/addemail';
import { RemoveEmailPage } from '../pages/removeemail/removeemail';
import { ChangeUsernamePage } from '../pages/changeusername/changeusername';
import { AccountLinkingPage } from '../pages/accountlinking/accountlinking';
import { ProfilePage } from '../pages/profile/profile';
import { LoginRadiusService } from '../pages/services/loginradius.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	LoginPage,
	RegisterPage,
	ForgotpasswordPage,
	ProfilePage,
	AfterLoginRedirectionPage,
	ProfileUpdatePage,ChangePasswordPage,UpdatePhonePage,
	AddEmailPage,RemoveEmailPage,ChangeUsernamePage,AccountLinkingPage
	
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	LoginPage,
	RegisterPage,
	ForgotpasswordPage,
	ProfilePage,
	AfterLoginRedirectionPage,ProfileUpdatePage,ChangePasswordPage,
	UpdatePhonePage,AddEmailPage,RemoveEmailPage,ChangeUsernamePage,AccountLinkingPage
  ],
  providers: [
    StatusBar,
	LoginRadiusService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
