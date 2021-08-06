import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { OktaAuthModule, OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import {OKTA_CONFIG} from '@okta/okta-angular';
import { Routes, RouterModule } from '@angular/router';

import oktaConfig from './app.config';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ OktaAuthGuard ],
  },
  {
    path: 'login/callback',
    component: OktaCallbackComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OktaAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig.oidc }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
