import { Component,OnInit } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-profileupdate',
  templateUrl: 'profileupdate.html'
})
export class ProfileUpdatePage implements OnInit{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService) {
    
   
  
  }
  

 ngOnInit() {

var response:any = {};
this.myService.getProfileUpdate(response); 
response.callback = (params=> {
if(params.action == "profileupdate") {
alert(JSON.stringify(params.response));
 
}

});


 
}
}