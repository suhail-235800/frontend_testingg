import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from './payment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
  public getttrip(tripid:any,payid:any){

    return this.http.get("http://localhost:9013/payment/"+tripid+"/"+payid);

  }
  

}
