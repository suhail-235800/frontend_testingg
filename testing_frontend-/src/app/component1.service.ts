import { Component1 } from './component1';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Component1Service {

constructor(private http:HttpClient) { }


  public login(component1:any){
    return this.http.post("http://localhost:9010/api/auth/signin",component1,{responseType:'text'});
  }
  public signup1(signup:any){
    return this.http.post("http://localhost:9010/api/auth/signup",signup,{responseType:'text'});
  }
  public getuseremail(uid:any)
  {
return this.http.get("http://localhost:9010/sendMail/"+uid);
  }
}
