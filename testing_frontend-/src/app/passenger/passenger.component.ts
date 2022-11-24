import { Router } from '@angular/router';
import { PaymentService } from './../payment.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';


@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  passenger: Passenger = new Passenger();
  message: any;
  
  constructor(private service: PassengerService,private service1:PaymentService,private route:Router) { }
  
  ngOnInit(): void { }
  public registerNow() {
    let resp = this.service.doRegistration(this.passenger);
    resp.subscribe((data) =>{ this.message = data
      this.route.navigateByUrl('/ridersview')
   console.log(data)});


 /*  let resp1 = this.service1.getttrip(this.tripid,this.payid);

   resp1.subscribe((data)=>{this.message = data

   console.log(data)

   this.route.navigateByUrl('/ridersview');
  

  });*/
}}
