import { Signup } from './../signup';
import { Component1Service } from './../component1.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { from } from 'rxjs';
import {FormGroup, FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private service:Component1Service ) {} 
  signup1:Signup = new Signup("","",0,"","",["user"]);
  signup:any;
  message:any;
 
    ngOnInit(): void {
    this.signup= new FormGroup({
      "UserName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(12)]),
      "Emailid":new FormControl(null,[Validators.required,Validators.email]),
      "Phonenumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]),
      "Password":new FormControl(null,[Validators.required]),
      "Uid":new FormControl(null,[Validators.required])


    });
  }
  submitData(){
      

      let resp=this.service.signup1(this.signup1);
      resp.subscribe((data)=>{this.message=data;
      console.log(this.message);
      this.router.navigateByUrl('/component1');}
      );
      





  }



  get UserName(){return this.signup.get('UserName');}
  get Emailid(){return this.signup.get('Emailid');}
  get Phonenumber(){return this.signup.get('Phonenumber');}
  get Password(){return this.signup.get('Password');}
  get uid(){return this.signup.get('uid');}



}

    
  
  


