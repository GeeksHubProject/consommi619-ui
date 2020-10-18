import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent{
    private slogan = 'أنا تونسي… نصنع تونسي … نستهلك تونسي'
    private sign_label = 'توقيع ميثاق نستهلك تونسي'

    constructor(private router: Router){

    }

    sign(){
        this.router.navigateByUrl('/sign');
    }
}