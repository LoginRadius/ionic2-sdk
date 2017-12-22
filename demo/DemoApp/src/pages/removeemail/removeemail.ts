import { Component,OnInit } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-removeemail',
  templateUrl: 'removeemail.html'
})
export class RemoveEmailPage implements OnInit{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService) {
    
   
  
  }
  
 ngOnInit() {


var response:any = {};
this.myService.getRemoveEmail(response); 
response.callback = (params=> {
if(params.action == "removeemail") {
alert(JSON.stringify(params.response));
 
}

});
 
}




 
}
