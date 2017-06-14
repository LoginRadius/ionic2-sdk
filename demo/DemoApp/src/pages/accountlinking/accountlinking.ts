import { Component,OnInit } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-accountlinking',
  templateUrl: 'accountlinking.html'
})
export class AccountLinkingPage implements OnInit{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService) {
    
   
  
  }
  
 ngOnInit() {

var response:any = {};
this.myService.getAccountLink(response); 
response.callback = (params=> {
if(params.action == "accountlink") {
alert(JSON.stringify(params.response));


var id:any=document.getElementById("loginradiuscustom_tmpl_link");
 var span = document.createElement("span");
 span.setAttribute('class',"lr-sl-icon1 lr-sl-icon1-<#=Name.toLowerCase()#>");
 var s = document.createElement("a");
   
  s.setAttribute('title',"<#=Name#>");
  s.setAttribute('href',"javascript:void(0)");

  s.innerHTML="Login With ";
  s.setAttribute('class',"lr-sl-shaded-brick-button lr-flat-<#=Name.toLowerCase()#>");
  s.setAttribute('onclick',"socialLogin('<#=Endpoint#>')"); 
  s.appendChild(span);
  id.appendChild(s);
 
}

});

 
}




 
}
