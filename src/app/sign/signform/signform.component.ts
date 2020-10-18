import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'src/app/services/social/facebook.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'signform',
    templateUrl: './signform.component.html',
    styleUrls: ['./signform.component.css']
})
export class SignformComponent implements OnInit{ 


    private noFacebook = false; 
    private signee ;

    constructor(private facebook_service: FacebookService,private users_service: UsersService, private router: Router){
        
    }

    ngOnInit(): void {
        this.signee = new FormGroup({
            firstname: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
            ]),
            lastname: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.email
            ]),
        })
    }

    toggleForm($event){
        $event.preventDefault();
        this.noFacebook = !this.noFacebook; 
    }

    

    get firstname(){ return this.signee.get('firstname') }

    get lastname(){ return this.signee.get('lastname') }

    get email(){ return this.signee.get('email') }

    onSubmit(){
        if (this.signee.valid){
            this.users_service.addSignee(this.signee.value).then((response) => {
                if (response.code === 200){
                    this.router.navigateByUrl('https://www.facebook.com/groups/2573727366018975/');
                } else{
                    console.log('here')
                }
            }).catch((error) => {
                if (error.status === 400){
                    this.signee.patchValue({email: ''});
                    alert(error.error.message);
                }
            })
        }
    }

    login($event){
        this.facebook_service.signIn('facebook', this.users_service);
    }
}