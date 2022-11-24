import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetComponent } from './forget/forget.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PassengerComponent } from './passenger/passenger.component';
import { RidersviewComponent } from './ridersview/ridersview.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerService } from './passenger.service';
import { OfferrideComponent } from './offerride/offerride.component';
import { PaymentComponent } from './payment/payment.component';

import { Payment1Component } from './payment1/payment1.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    SignupComponent,
    HomeComponent,
    ForgetComponent,
    RidersviewComponent,
    PassengerComponent,
    ConfirmationComponent,
    OfferrideComponent,
    PaymentComponent,
    Payment1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PassengerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
