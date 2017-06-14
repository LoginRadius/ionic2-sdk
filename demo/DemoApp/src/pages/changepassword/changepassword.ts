import { Component,OnInit } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html'
})
export class ChangePasswordPage implements OnInit{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService) {
    
   
  
  }
  
 ngOnInit() {

var response:any = {};
this.myService.getChangePassword(response); 
response.callback = (params=> {
if(params.action == "changepassword") {
alert(JSON.stringify(params.response));
 
}
 
 
});

 
}




 
}
