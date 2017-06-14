import { Component,OnInit } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-addemail',
  templateUrl: 'addemail.html'
})
export class AddEmailPage implements OnInit{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService) {
    
   
  
  }
  
 ngOnInit() {

var response:any = {};
this.myService.getAddEmail(response); 
response.callback = (params=> {
if(params.action == "addemail") {
alert(JSON.stringify(params.response));
 
}

});
 
}




 
}
