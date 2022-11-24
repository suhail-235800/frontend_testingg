import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferrideService } from '../offerride.service';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';
import { TestService } from '../test.service';


@Component({
  selector: 'app-ridersview',
  templateUrl: './ridersview.component.html',
  styleUrls: ['./ridersview.component.css']
})
export class RidersviewComponent implements OnInit {
passenger:Passenger=new Passenger();
  rides: any;
  tripid: any;
rides2:any
  constructor(private service: OfferrideService, private service1: PassengerService,private router:Router,public test:TestService) { }
  
  manipulate(tripid: any, uid: any) {
   
    let resp1 = this.service1.setpassengertripid(tripid, uid, this.passenger);
    resp1.subscribe((data) =>{ this.rides = data
      this.router.navigateByUrl('/payment',{state:this.rides});
    });
    this.passenger=new Passenger();
    let resp = this.service1.sendmail(tripid)
    resp.subscribe((data) =>{ this.rides = data
      
    });

     let resp2 = this.service.deleteUser(tripid);
     resp2.subscribe((data) => {
       this.rides = data
       console.log(this.rides);
      

    });
 
   
    // console.log(tripid)
 
    // let resp2 = this.service1.getUserById(17)
    // resp2.subscribe((data) =>{ this.rides2 = data
    //   console.log(this.rides2)
    // });



  }

  ngOnInit(): void {
    
    let resp = this.service.getUsers();
    resp.subscribe((data) => {
      this.rides = data
      
     
    }
    );
    
  }






}
