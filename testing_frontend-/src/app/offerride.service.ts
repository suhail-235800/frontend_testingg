import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OfferrideService {
  
  constructor(private http:HttpClient ) {}
  public getUsers(){
    return this.http.get("http://localhost:9011/offerride/offer");
  }
  public deleteUser(tripid:any){
    return this.http.delete("http://localhost:9011/offerride/offer/"+tripid);
  }



  public offerdata(offerride:any){
    return this.http.post("http://localhost:9011/offerride/offer",offerride,{responseType:'text' as 'json'});
  }


public getbyplace(start_point:any){
  return this.http.get("http://localhost:9011/offerride/offers/"+start_point);
}

  /*public getdata(){
    return this.http.get("http://localhost:9011/offerride/offer");
  }
  public getwithtripid(tripid:any){
    return this.http.post("http://localhost:9011/offerride/offer/"+tripid,{responseType:'text' as 'json'});
  }
*/

}
