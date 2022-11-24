import { HttpResponse } from '@angular/common/http';
import { Component1Service } from './../component1.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { Component1 } from '../component1';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  component1 :Component1 = new Component1("","");
  message:any;


  constructor(private service : Component1Service,private router: Router ) {} 
  ngOnInit(): void {}
  public submitData(){

   
    let resp=this.service.login(this.component1);
    resp.subscribe((data)=>{this.message=data;
    console.log(this.message);
    this.router.navigateByUrl('/home1');}
    );
   
    
    
    
    
  }



}
