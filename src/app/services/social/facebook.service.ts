import { Injectable } from '@angular/core'
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';


@Injectable()
export class FacebookService{
    private user; 

    constructor(private _auth: AuthService, private users_service: UsersService, private router: Router){
    }



    signIn(platform: string, users_service: UsersService){
        platform = FacebookLoginProvider.PROVIDER_ID;
        return this._auth.signIn(platform).then((user) => {
            let facebook_user = {
                firstname: user.firstName,
                lastname: user.lastName,
                email: user.email,
                facebook_id: user.id,
                photo_url: user.photoUrl
            }
            users_service.addSignee(facebook_user).then((response) => {
                console.log(response)
                if (response.code === 201){
                    this.router.navigateByUrl('https://www.facebook.com/groups/2573727366018975/');
                }else {
                    //someting else
                }
            }).catch((error) => {
                console.log('error with adding user', error)
            })
        }).catch((facebookError) => {
            console.log(facebookError);
        })
    }


}