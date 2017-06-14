import { Component,OnInit } from '@angular/core';
import { LoginRadiusService } from '../services/loginradius.service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit{

  constructor(public navCtrl: NavController,private myService:LoginRadiusService) {
 
  }
  
 ngOnInit() { 

 var token:any=sessionStorage.getItem('LRTokenKey');
 var endpoint:any="userprofile";
 var param:any=null;
 this.myService.getSocialAPI(token,endpoint,param,response=>{
           
     		   if(response.ImageUrl!=null){
			   document.getElementById('userimage').setAttribute( 'src', response.ImageUrl);
			  }
			 document.getElementById('ID').innerHTML = response.ID;
	         document.getElementById('Provider').innerHTML = response.Provider;
	         document.getElementById('username').innerHTML = (response.FirstName || '') + ' ' + (response.MiddleName || '') + ' ' + (response.LastName || '');
	         document.getElementById('emailid').innerHTML = response.Email && response.Email.length > 0 ? response.Email[0].Value : '';
	         document.getElementById('birthdate').innerHTML = response.BirthDate;
	         document.getElementById('gender').innerHTML = response.Gender;
	         document.getElementById('profileurl').innerHTML = response.ProfileUrl;
 }); 

 }
 
 
}
