import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users/users.service";
import { FacebookService } from '../services/social/facebook.service';

@Component({
    selector: 'signees-list',
    templateUrl : './list.component.html',
    styleUrls: ['list.component.css']
})
export class SigneesComponent implements OnInit {
    private users; 
    private section_title = 'هوما يستهلكوا تونسي وإنت ؟'
     constructor(private users_service: UsersService, private fbService: FacebookService){
        this.users_service.getUsers().then((res) => {
            //console.log(res)
            this.users = res; 
        })
        .catch(error => {
            //console.log(error)
        }); 
     }

     login(){
        
     }

     ngOnInit(){
     }
}