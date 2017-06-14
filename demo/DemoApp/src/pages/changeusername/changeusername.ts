import { Component,OnInit } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-changeusername',
  templateUrl: 'changeusername.html'
})
export class ChangeUsernamePage implements OnInit{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService) {
    
   
  
  }
  
 ngOnInit() {


var response:any = {};
this.myService.getChangeUsername(response); 
response.callback = (params=> {
if(params.action == "changeusername") {
alert(JSON.stringify(params.response));
 
}

});
 
}




 
}
