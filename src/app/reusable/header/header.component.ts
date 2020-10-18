import { Component } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    private links = [
        'الرئيسية',
        'شارك',
        'من نحن ؟'
    ]
}