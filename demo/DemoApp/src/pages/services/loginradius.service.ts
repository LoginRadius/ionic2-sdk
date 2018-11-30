import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
declare var LRObject: any; 

@Injectable()
 export class LoginRadiusService {
 constructor(private http:Http) {
 
}
 ionicLogin(url, lroptions) {

    if (lroptions.facebookNative && url.indexOf("facebook") !== -1) {
        ( < any > window).facebookConnectPlugin.login(["public_profile"], (response => {
            if (response.authResponse) {
                console.log(response.authResponse);
                this.facebookNative(response, lroptions);
            } else {
                // user is not logged in
            }
        }));
    } else if (lroptions.googleNative && url.indexOf("google") !== -1) {
        var webClientId = "";
        if (lroptions.googlewebid != null || lroptions.googlewebid != "") {
            webClientId = lroptions.googlewebid;
        }
        ( < any > window).plugins.googleplus.login({
            'webClientId': webClientId, // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
            'scope': "https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email"
        }, (user_data => {
            // For the purpose of this example I will store user data on local storage
            console.log(JSON.stringify(user_data));
            this.googleNative(user_data, lroptions);

        }), (msg => {
            alert('error: ' + msg);
        }));
    }else if (lroptions.vkNative && url.indexOf("vkontakte") !== -1) {
                    var vkAppId = "";

                    if (lroptions.vkAppId != null || lroptions.vkAppId != "") {
                        vkAppId = lroptions.vkAppId;
                    }
                  ( < any > window).SocialVk.init(vkAppId);

                   ( < any > window).SocialVk.login(["photos"], (res => {

            if(res['token']===undefined){
                 this.vkNative(JSON.parse(res), lroptions);
                 console.log(JSON.parse(res));
            }else{
                console.log(res);
                this.vkNative(res['token'], lroptions);
            }
            
           // 
              
         }),(error => {
            alert(error);
        }));

    }else {
        return LRObject.util.openWindow(url);
    }
}

getLogin(lrcallback) {
    var params: any = {};
    var options: any = {};

    var sl_options: any = {};
    sl_options.onSuccess = function(response) {
        params.response = response;
        params.action = "sociallogin";
        lrcallback.callback(params);
    };
    sl_options.onError = function(errors) {
        params.response = errors;
        params.action = "sociallogin";
        lrcallback.callback(params);
    };
    options.onSuccess = function(response) {
        params.response = response;
        params.action = "login";
        lrcallback.callback(params);
    };
    options.onError = function(errors) {
        params.response = errors;
        params.action = "login";
        lrcallback.callback(params);
    };
    options.container = "login-container";
    sl_options.container = "sociallogin-container"
    sl_options.templateName = "loginradiuscustom_tmpl";
    LRObject.customInterface(".interfacecontainerdiv", sl_options);

    LRObject.$hooks.register('afterFormRender', function(name) {
	if(name=="socialRegistration"){
	 document.getElementById('login-container').style.display = 'none';
     document.getElementById('line').style.display = 'none';
	}else if(name=="updatePhone" || name=="loginRequiredFieldsUpdate" || name=="otp"){
	 document.getElementById('sociallogin-container').style.display = 'none';
     document.getElementById('line').style.display = 'none';
	}
		
   });

    LRObject.init("login", options);
    LRObject.init('socialLogin', sl_options);




}

getRegister(lrcallback) {
    var params: any = {};
    var registration_options: any = {}
    registration_options.onSuccess = function(response) {
        //On Success
        params.response = response;
        params.action = "register";
        lrcallback.callback(params);

    };
    registration_options.onError = function(errors) {
        //On Errors
        console.log(errors);
        params.response = errors;
        params.action = "register";
        lrcallback.callback(params);

    };
    registration_options.container = "registration-container";
    LRObject.registrationFormSchema = false;
    LRObject.init("registration", registration_options);
}

getSocialLogin(lrcallback) {
    var params: any = {};
    var sl_options: any = {};
    sl_options.onSuccess = function(response) {
        params.response = response;
        params.action = "sociallogin";
        lrcallback.callback(params);
    };
    sl_options.onError = function(errors) {
        params.response = errors;
        params.action = "socaillogin";
        lrcallback.callback(params);
    };
    sl_options.container = "sociallogin-container"
    sl_options.templateName = "loginradiuscustom_tmpl";
    LRObject.customInterface(".interfacecontainerdiv", sl_options);
    LRObject.init('socialLogin', sl_options);

}

getForgotpassword(lrcallback) {
    var params: any = {};
    var forgotpassword_options: any = {};
    forgotpassword_options.container = "forgotpassword-container";
    forgotpassword_options.onSuccess = function(response) {
        // On Success
        params.response = response;
        params.action = "forgotpassword";
        lrcallback.callback(params);
        console.log(response);

    };
    forgotpassword_options.onError = function(errors) {
        // On Errors
        console.log(errors);
        params.response = errors;
        params.action = "forgotpassword";
        lrcallback.callback(params);

    }
    LRObject.init("forgotPassword", forgotpassword_options);
}


getProfileUpdate(lrcallback) {
    var params: any = {};
    var profileeditor_options: any = {};
    profileeditor_options.container = "profileeditor-container";
    profileeditor_options.onSuccess = function(response) {

        // On Success
        params.response = response;
        params.action = "profileupdate";
        lrcallback.callback(params);
        console.log(response);

    };
    profileeditor_options.onError = function(errors) {

        // On Error
        params.response = errors;
        params.action = "profileupdate";
        lrcallback.callback(params);
        console.log(errors);
    };
    LRObject.registrationFormSchema = false;
    LRObject.init("profileEditor", profileeditor_options);

}
getChangePassword(lrcallback) {
    var params: any = {};
    var changepassword_options: any = {};
    changepassword_options.container = "changepassword-container";
    changepassword_options.onSuccess = function(response) {
        // On Success
        params.response = response;
        params.action = "changepassword";
        lrcallback.callback(params);
        console.log(response);
    };
    changepassword_options.onError = function(errors) {
        // On Error
        params.response = errors;
        params.action = "changepassword";
        lrcallback.callback(params);
        console.log(errors);

    };

    LRObject.init("changePassword", changepassword_options);

}

getUpdatePhone(lrcallback) {
    var params: any = {};
    var updatephone_options: any = {};
    updatephone_options.container = "updatephone-container";
    updatephone_options.onSuccess = function(response) {
        // On Success
        params.response = response;
        params.action = "updatephone";
        lrcallback.callback(params);
        console.log(response);
    };
    updatephone_options.onError = function(errors) {
        // On Error
        params.response = errors;
        params.action = "updatephone";
        lrcallback.callback(params);
        console.log(errors);
    };

    LRObject.init("updatePhone", updatephone_options);
}

getAddEmail(lrcallback) {
    var params: any = {};
    var addemail_options: any = {};
    addemail_options.container = "addemail-container";
    addemail_options.onSuccess = function(response) {
        // On Success
        params.response = response;
        params.action = "addemail";
        lrcallback.callback(params);
        console.log(response);
    };
    addemail_options.onError = function(errors) {
        // On Error
        params.response = errors;
        params.action = "addemail";
        lrcallback.callback(params);
        console.log(errors);
    };

    LRObject.init("addEmail", addemail_options);
}

getRemoveEmail(lrcallback) {
    var params: any = {};
    var removeemail_options: any = {};
    removeemail_options.container = "removeemail-container";
    removeemail_options.onSuccess = function(response) {
        // On Success
        params.response = response;
        params.action = "removeemail";
        lrcallback.callback(params);
        console.log(response);
    };
    removeemail_options.onError = function(errors) {
        // On Error
        params.response = errors;
        params.action = "removeemail";
        lrcallback.callback(params);
        console.log(errors);
    };

    LRObject.init("removeEmail", removeemail_options);
}

getChangeUsername(lrcallback) {
    var params: any = {};
    var changeusername_options: any = {};

    changeusername_options.container = "changeusername-container";
    changeusername_options.onSuccess = function(response) {
        // On Success
        params.response = response;
        params.action = "changeusername";
        lrcallback.callback(params);
        console.log(response);
    };
    changeusername_options.onError = function(errors) {
        // On Error
        params.response = errors;
        params.action = "changeusername";
        lrcallback.callback(params);
        console.log(errors);
    };

    LRObject.init("changeUsername", changeusername_options);
}

getAccountLink(lrcallback) {
    var params: any = {};
    var la_options: any = {};
    la_options.container = "interfacecontainerdiv_link";
    la_options.templateName = "loginradiuscustom_tmpl_link"
    la_options.onSuccess = function(response) {
        // On Success
        params.response = response;
        params.action = "accountlink";
        lrcallback.callback(params);
        console.log(response);
    };
    la_options.onError = function(errors) {
        // On Errors
        params.response = errors;
        params.action = "accountlink";
        lrcallback.callback(params);

        console.log(errors);
    }
    LRObject.init("linkAccount", la_options);
    LRObject.init("unLinkAccount", la_options);
}



getTwoFactorAuthentication(lrcallback) {
    var params: any = {};
    var authentication_options: any = {};
    authentication_options.container = "authentication-container";
    authentication_options.onSuccess = function(response) {
        // On Success
		 console.log(response);
		 alert(JSON.stringify(response));
        params.response = response;
        params.action = "twofactorauthentication";
        lrcallback.callback(params);
        //console.log(response);
    };
    authentication_options.onError = function(errors) {
        // On Errors
		 alert(JSON.stringify(errors));
        params.response = errors;
        params.action = "twofactorauthentication";
        lrcallback.callback(params);
        console.log(errors);

    }
    LRObject.init("createTwoFactorAuthentication", authentication_options);
}


getSmartLogin(lrcallback) {
    var params: any = {};
    var options: any = {};
    options.onSuccess = function(response) {
        //On Success
        params.response = response;
        params.action = "smartlogin";
        lrcallback.callback(params);
        console.log(response);
    };
    options.onError = function(errors) {
        //On Error
        params.response = errors;
        params.action = "smartlogin";
        lrcallback.callback(params);
        console.log(errors);
    }
    options.container = "smartLogin-container";

    LRObject.init("smartLogin", options);

}


getonetouchLogin(lrcallback) {
    var params: any = {};
    var options: any = {};
    options.onSuccess = function(response) {
        //On Success
        params.response = response;
        params.action = "onetouchlogin";
        lrcallback.callback(params);
        console.log(response);
    };
    options.onError = function(errors) {
        //On Error
        params.response = errors;
        params.action = "onetouchlogin";
        lrcallback.callback(params);
        console.log(errors);
    }
    options.container = "onetouchLogin-container";

    LRObject.init("onetouchLogin", options);

}


getpasswordlessLoginValidate(lrcallback) {
    var params: any = {};
    var options: any = {};
    options.onSuccess = function(response) {
        //On Success
        params.response = response;
        params.action = "passwordlessloginvalidate";
        lrcallback.callback(params);
        console.log(response);
    };
    options.onError = function(errors) {
        //On Error
        params.response = errors;
        params.action = "passwordlessloginvalidate";
        lrcallback.callback(params);
        console.log(errors);
    }
 
    LRObject.init("passwordlessLoginValidate", options);

}

getUpdateSecurityQuestion(lrcallback) {
    var params: any = {};
    var options: any = {};
    options.onSuccess = function(response) {
        //On Success
        params.response = response;
        params.action = "updatesecurityquestion";
        lrcallback.callback(params);
        console.log(response);
    };
    options.onError = function(errors) {
        //On Error
        params.response = errors;
        params.action = "updatesecurityquestion";
        lrcallback.callback(params);
        console.log(errors);
    }
    options.container = "securityQ-container";

    LRObject.init("updateSecurityQuestion", options);

}

getResetPasswordBySecurityQuestion(lrcallback) {
    var params: any = {};
    var options: any = {};
    options.onSuccess = function(response) {
        //On Success
        params.response = response;
        params.action = "resetPasswordBySecurityQuestion";
        lrcallback.callback(params);
        console.log(response);
    };
    options.onError = function(errors) {
        //On Error
        params.response = errors;
        params.action = "resetPasswordBySecurityQuestion";
        lrcallback.callback(params);
        console.log(errors);
    }
    options.container = "resetPasswordBySecQ-container";

    LRObject.init("resetPasswordBySecurityQuestion", options);

}


getValidateToken(lrcallback, token) {
    var params: any = {};
    LRObject.api.validateToken(token,
        function(response) {
            params.response = response;
            params.action = "validatetoken";
            lrcallback.callback(params);
            console.log(response);
        },
        function(errors) {
            params.response = errors;
            params.action = "validatetoken";
            lrcallback.callback(params);
            console.log(errors);
        });
}


getInvalidateToken(lrcallback, token) {
    var params: any = {};
    LRObject.api.invalidateToken(token,
        function(response) {
            params.response = response;
            params.action = "invalidatetoken";
            lrcallback.callback(params);
            console.log(response);
        },
        function(errors) {
            params.response = errors;
            params.action = "invalidatetoken";
            lrcallback.callback(params);
            console.log(errors);
        });
}


resendEmailVerification(email,handle) {
    var params: any = {};
    params.email = email;
    var onSuccess: any = function(response) {
        handle(response);
    };
    var onError: any = function(response) {
        handle(response);
    };
    LRObject.api.resendEmailVerification(params, onSuccess, onError);
}

verifyOTP(phone,otp,handle) {
    var params: any = {};
    var params1: any = {};
    params.phone = phone;
    params1.otp = otp;
    var onSuccess: any = function(response) {
        handle(response);
    };
    var onError: any = function(response) {
        handle(response);
    };

    LRObject.api.verifyOTP(params1, params, onSuccess, onError);
}


resendOTP(phone,handle) {
    var params: any = {};
    params.phone = phone;
    var onSuccess: any = function(response) {
        handle(response);
    };
    var onError: any = function(response) {
        handle(response);
    };
    LRObject.api.resendOTP(params, onSuccess, onError);
}

checkPhoneNumberAvailability(phone,handle) {
    var params: any = {};
    params.phone = phone;
    var onSuccess: any = function(response) {
        handle(response);
    };
    var onError: any = function(response) {
        handle(response);
    };
    LRObject.api.checkPhoneNumberAvailability(params, onSuccess, onError);
}


checkEmailAvailability(email,handle) {
    var params: any = {};
    params.email = email;
    var onSuccess: any = function(response) {
        handle(response);
    };
    var onError: any = function(response) {
        handle(response);
    };
    LRObject.api.checkEmailAvailability(params, onSuccess, onError);
}


checkUserNameAvailability(username,handle) {
    var params: any = {};
    params.username = username;
    var onSuccess: any = function(response) {
        handle(response);
    };
    var onError: any = function(response) {
        handle(response);
    };
    LRObject.api.checkUserNameAvailability(params, onSuccess, onError);
}

getLogout(lrcallback) {

    var params: any = {};

    var logout_options: any = {};
    logout_options.onSuccess = (test => {
        // On Success
        //Write your custom code here
        sessionStorage.removeItem('LRTokenKey');
        params.response = "true";
        params.action = "logout";
        lrcallback.callback(params);

    });

    LRObject.init("logout", logout_options);



}




getSocialAPI(token, endpoint, paramQueryString, handle) {
    var onSuccess: any = function(response) {
        handle(response);
    };
    var onError: any = function(response) {
        handle(response);
    };
    LRObject.api.getSocialData(token, onSuccess, onError, endpoint, paramQueryString);
}


googleNative(userData, lroptions) {
    this.restRequest("https://api.loginradius.com/api/v2/access_token/googlejwt?key=" + lroptions.apiKey + "&id_token=" + userData.idToken)
        .subscribe(res => {
                this.LoginRadiusNativeCallback(res);
            },
            (err) => console.log(err),
            () => console.log("done !")
        );
}

facebookNative(userData, lroptions) {
    this.restRequest("https://api.loginradius.com/api/v2/access_token/facebook?key=" + lroptions.apiKey + "&fb_access_token=" + userData['authResponse']['accessToken'])
        .subscribe(res => {
                this.LoginRadiusNativeCallback(res);

            },
            (err) => console.log(err),
            () => console.log("done !")
        );
};


vkNative(userData, lroptions) {
    this.restRequest("https://api.loginradius.com/api/v2/access_token/vkontakte?key=" + lroptions.apiKey + "&vk_access_token=" + userData.token)
        .subscribe(res => {
                this.LoginRadiusNativeCallback(res);

            },
            (err) => console.log(err),
            () => console.log("done !")
        );
};

restRequest(url) {

    return this.http
        .get(url)
        .map(res => res.json());
}


nativeCallbackFacebookFail(res) {
    console.log(res);
}

nativeLogoutFacebookSuccess(response) {
    sessionStorage.removeItem('LRTokenKey');
}

nativeLogoutFacebookFailure(response) {
    console.log('error');
}
LoginRadiusNativeCallback(callback) {
    LRObject.loginRadiusHtml5PassToken(callback['access_token']);
}

}