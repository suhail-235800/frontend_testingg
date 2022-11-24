export class Offerride {
    
    uid:any=0
    name:any=""
    phone:any=""
    v_no:any=""
    start_point:any=""
    dest_point:any=""
    start_time:any=""
    dest_time:any=""
    email:any=""
    price:any=0
    kms:any=0
 constructor(
    
    uid:any=0,
    name:any="",
    phone:any="",
    v_no:any="",
    start_point:any="",
    dest_point:any="",
    start_time:any="",
    dest_time:any="",
   email:any="",
    price:any=0,
    kms:any=0
){
    
     this.uid=uid;
     this.name=name;
     this.phone=phone;
     this.v_no=v_no;
     this.start_point=start_point;
     this.dest_point=dest_point;
     this.start_time=start_time;
     this.dest_time=dest_time;
     this.email=email;
     this.price=price;
     this.kms=kms;
     }
 

}
