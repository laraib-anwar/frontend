import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { SignupComponent } from './signup/signup.component';
import { UploadproductComponent } from './uploadproduct/uploadproduct.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'help', component: HelpComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'new', component: UploadproductComponent},
  {path: 'edit/:id', component: EditproductComponent},
  {path: 'delete/:id', component: DeleteproductComponent},
  {path: 'show/:id', component: ShowproductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
