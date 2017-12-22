import { Component,OnInit } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-updatephone',
  templateUrl: 'updatephone.html'
})
export class UpdatePhonePage implements OnInit{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService) {
    
   
  
  }
  
 ngOnInit() {
var response:any = {};
this.myService.getUpdatePhone(response); 
response.callback = (params=> {
if(params.action == "updatephone") {
alert(JSON.stringify(params.response));
 
}

});

 
}




 
}
