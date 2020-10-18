import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigneesComponent } from './signees/list.component';
import { UsersService } from './services/users/users.service';
// Importing social login module and facebook login provider.
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FacebookService } from './services/social/facebook.service';
import { HeaderComponent } from './reusable/header/header.component';
import { MainComponent } from './main/main.component';
import { PrinciplesComponent } from './sections/principles/principles.component';


// material 
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import { FooterComponent } from './reusable/footer/footer.component';
// routing 
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { SignformComponent } from './sign/signform/signform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// forms 
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

//http client
import { HttpClientModule } from '@angular/common/http';
import { ContributeComponent } from './contribute/contribute.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ContributeFormComponent } from './contribute/contribute-form/contribute-form.component';


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
  { path: 'contribute', component: ContributeComponent },
  { path: 'about-us', component: AboutusComponent },
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
    SignComponent,
    SignformComponent,
    ContributeComponent,
    AboutusComponent,
    LegalNoticeComponent,
    ContributeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule.initialize(config),
    JwSocialButtonsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
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
