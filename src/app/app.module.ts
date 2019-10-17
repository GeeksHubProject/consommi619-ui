import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigneesComponent } from './signees/list.component';
import { UsersService } from './services/users/users.service';
// Importing social login module and facebook login provider.
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { FacebookService } from './services/social/facebook.service';
import { HeaderComponent } from './reusable/header/header.component';
import { MainComponent } from './main/main.component';
import { PrinciplesComponent } from './sections/principles/principles.component';


// material 
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './reusable/footer/footer.component';
// routing 
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';


const facebook_oauth_client_id: string = '774836362968295';
let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(facebook_oauth_client_id)
  }
]);

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  { path: 'sign', component: SignComponent },
  { path: '**', component: HeaderComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    SigneesComponent,
    HeaderComponent,
    MainComponent, 
    PrinciplesComponent, 
    FooterComponent, 
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule.initialize(config),
    MatCardModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [
    UsersService,
    FacebookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
