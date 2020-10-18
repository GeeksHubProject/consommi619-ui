import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'footer-ss',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent{

    constructor(private routerInterface: ActivatedRoute){
        let id : Observable<string> = routerInterface.params.pipe(map(p => p.id)) 
        
    }

}