import { Component, Input, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { PassengerService } from '../passenger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment1',
  templateUrl: './payment1.component.html',
  styleUrls: ['./payment1.component.css']
})
export class Payment1Component implements OnInit {
rides:any

  constructor(private service:PassengerService ,private router:Router) { }

generate(uid:any)
{
  
  let resp2 = this.service.generateinvoice(uid);
     resp2.subscribe((data) => {
       this.rides = data
       console.log(this.rides);
      

    });
}

  ngOnInit(): void {
    
  }

}
