import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PassengerComponent } from './passenger/passenger.component';
import { RidersviewComponent } from './ridersview/ridersview.component';
import { OfferrideComponent } from './offerride/offerride.component';
import { SuccessComponent } from './success/success.component';
import { Home1Component } from './home1/home1.component';
import { ForgetComponent } from './forget/forget.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';

import { Payment1Component } from './payment1/payment1.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'component1', component:Component1Component},
   {path:'signup',component:SignupComponent},
   {path:'home',component:HomeComponent},
   {path:'passenger',component:PassengerComponent},
   {path:'confirmation',component:ConfirmationComponent},
   {path:'ridersview',component:RidersviewComponent},
   
   {path:'offerride',component:OfferrideComponent},
   {path:'success',component:SuccessComponent},
   {path:'home1',component:Home1Component},
   {path:'forget',component:ForgetComponent},
   {path:'payment',component:PaymentComponent},
   {path:'payment1',component:Payment1Component},

   {path:'**',redirectTo:'/passenger'}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
