import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadproductComponent } from './uploadproduct/uploadproduct.component';
import { HelpComponent } from './help/help.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    UploadproductComponent,
    HelpComponent,
    ForgotComponent,
    ContactComponent,
    PrivacyComponent,
    EditproductComponent,
    DashboardComponent,
    ShowproductComponent,
    DeleteproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
