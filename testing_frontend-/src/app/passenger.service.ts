import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from './passenger';
@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  constructor(private http:HttpClient) { }


  public doRegistration(passenger:any){
    return this.http.post("http://localhost:9012/passenger/addPassenger",passenger,{responseType:'text' as 'json'});
  }



  public getUserById(tripid:any){
    return this.http.get("http://localhost:9012/passenger/payment/"+tripid);
  }

  public setpassengertripid(tripid:any,uid:any,passenger:any)
  {
    return this.http.put("http://localhost:9012/passenger/updatetripid/"+uid+"/"+tripid,passenger);

  }
  public sendmail(tripid:any)
  {
    return this.http.get("http://localhost:9012/sendMail/"+tripid);
  }
  
  public getttrip(tripid:any,payid:any){
    return this.http.get("http://localhost:9013/payment/"+tripid+"/"+payid);
  }

public generateinvoice(uid:any){
  return this.http.get("http://localhost:9012/passenger/invoice/"+uid);
}

}
