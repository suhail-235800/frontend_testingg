import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component1Service } from '../component1.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private service:Component1Service) { }
  forget:any;
message:any;
  ngOnInit(): void {
    this.forget= new FormGroup({
      "Uid":new FormControl(null,[Validators.required,Validators.email])
  });
}
  submitData(uid:any){
    console.log(uid);
    let resp=this.service.getuseremail(uid);
      resp.subscribe((data)=>{this.message=data;

    alert("we have send a link to reset password to your email");
  });
  }
  get Uid(){return this.forget.get('Uid');}

}