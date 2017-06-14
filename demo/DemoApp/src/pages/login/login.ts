import { Component,OnInit,NgZone } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';
import { AfterLoginRedirectionPage } from '../afterloginredirection/afterloginredirection';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService,private zone:NgZone) {
    
    (<any>window).angularComponentRef = {
      zone: this.zone, 
      componentFn: (url,lroptions) => myService.ionicLogin(url,lroptions), 
      component: this
    };
   
 
  }
  

 
  
 ngOnInit() {
 

var response:any = {};


this.myService.getLogin(response);

response.callback = (params=> {

if(params.action == "sociallogin") {
if(params.response.access_token!=null){
 sessionStorage.setItem('LRTokenKey', params.response.access_token);
this.navCtrl.push(AfterLoginRedirectionPage);
 }else if(params.response.AccessToken!=null){
 sessionStorage.setItem('LRTokenKey', params.response.AccessToken);
this.navCtrl.push(AfterLoginRedirectionPage);
 }
 else{
 alert(JSON.stringify(params.response));
 }
 }else if(params.action == "login"){
 if(params.response.access_token!=null){
 sessionStorage.setItem('LRTokenKey', params.response.access_token);
 this.navCtrl.push(AfterLoginRedirectionPage);
 
 }else{
 alert(JSON.stringify(params.response));
 }
 }
 
 
});

 var id:any=document.getElementById("loginradiuscustom_tmpl");
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






 
}
