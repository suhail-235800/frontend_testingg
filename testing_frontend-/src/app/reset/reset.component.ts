import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {


  constructor() {}
  reset:any;

  ngOnInit(): void {
    this.reset= new FormGroup({
      "Password":new FormControl(null,[Validators.required])


    });
  }
  submitData(){
    console.log(this.reset.value);
    alert("password updated sucessfully");

  }
  get password(){return this.reset.get('Password');}

}
