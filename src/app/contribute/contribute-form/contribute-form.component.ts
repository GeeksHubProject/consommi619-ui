import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-contribute-form',
  templateUrl: './contribute-form.component.html',
  styleUrls: ['./contribute-form.component.css']
})
export class ContributeFormComponent implements OnInit {
  contribute_form : FormGroup
  constructor(private users_service : UsersService) { 
    this.contribute_form = new FormGroup({
      'firstname' : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
    ]),
      'lastname' : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
    ]),
      'email' : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.email
    ]),
      'motivation' : new FormControl('', [
        Validators.required,
        Validators.minLength(100),
        Validators.maxLength(1000),
    ]),
      'expertise' : new FormControl('', [
        Validators.required,
        Validators.minLength(100),
        Validators.max(500),
    ]),
    'phone' : new FormControl('', [
      Validators.minLength(8),
  ])
    })
  }

  onSubmit(){
    console.log(this.contribute_form.value); 
    if (this.contribute_form.valid){
      let contributor = this.contribute_form.value; 
      this.users_service.addContributor(contributor).then((response) => {
        // do someting
      }).catch(error => {
        //do something
      })
    }
  }

  ngOnInit() {
    if (localStorage.getItem('user_data')){
      let data = localStorage.getItem('user_data'); 
      this.contribute_form.patchValue(JSON.parse(data)); 
      
    }
  }
  get firstname(){ return this.contribute_form.get('firstname') }

  get lastname(){ return this.contribute_form.get('lastname') }

  get email(){ return this.contribute_form.get('email') }

  get expertise(){ return this.contribute_form.get('expertise') }
  
  get motivation(){ return this.contribute_form.get('motivation') }

  get phone(){ return this.contribute_form.get('phone') }

}
