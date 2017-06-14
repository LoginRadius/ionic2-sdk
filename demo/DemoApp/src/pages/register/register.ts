import { Component,OnInit } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage implements OnInit{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService) {
 
   
  
  }
  
 ngOnInit() { 
 var response:any = {};
 this.myService.getRegister(response); 
response.callback = function(params) {
if(params.action == "register") {
 alert(JSON.stringify(params.response));
 
 }
 
 
} 
}
 
}
