import { Offerride } from './../offerride';
import { Time } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { OfferrideService } from '../offerride.service';

import { FormBuilder } from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-offerride',
  templateUrl: './offerride.component.html',
  styleUrls: ['./offerride.component.css']
})
export class OfferrideComponent implements OnInit {
  offerride: Offerride = new Offerride(0, "", "", "", "", "", "", "", "", 0, 0);
  message: any;

  constructor(private router: Router, private service: OfferrideService) { }

  ngOnInit(): void {
  }


  onSubmit(uid: String, name: String, phno: String, vnum: String, src: String, srct: String, dest: String, destt: String, deskm: any, tkm: any) {
    if (name != '' && uid != '' && phno != '' && vnum != '' && src != '' && srct != '' && dest != '' && destt != '' && tkm != '') {
      if (src != dest) {
        let resp = this.service.offerdata(this.offerride);
        resp.subscribe((data) => {
          this.message = data;
          this.router.navigateByUrl('/success');
        });


      }




    }
    else {

      alert("Enter your details");

    }

  }


}
