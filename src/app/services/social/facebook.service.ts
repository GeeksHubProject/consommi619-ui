import { Injectable } from '@angular/core'
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';


@Injectable()
export class FacebookService{
    private user; 

    constructor(private _auth: AuthService){}

    signIn(platform: string): void {
        platform = FacebookLoginProvider.PROVIDER_ID;
        this._auth.signIn(platform).then(
            (response) => {
                console.log('user logged in', response);
            }
        )
    }


}