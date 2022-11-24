export class Signup {

    
    username:any=""
    password:any=""
    uid:any=0
    phone:any=""
    email:any=""
    role:any=[""]
    constructor(
        username:any="",
        password:any="",
        uid:any=0,
        phone:any="",
        email:any="",
        role:any=[""]
    ){
        this.username=username;
        this.password=password;
        this.uid=uid;
        this.phone=phone;
        this.email=email;
        this.role=role;
    }

}
