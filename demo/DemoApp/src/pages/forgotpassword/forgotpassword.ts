import { Component,OnInit } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html'
})
export class ForgotpasswordPage implements OnInit{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService) {
 
   
  
  }
  
 ngOnInit() { 
 var response:any = {};
 this.myService.getForgotpassword(response);   
 response.callback = function(params) {
if(params.action == "forgotpassword") {
 alert(JSON.stringify(params.response));
 }
 }
}
 
}
