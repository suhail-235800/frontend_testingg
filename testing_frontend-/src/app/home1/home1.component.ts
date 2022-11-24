import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 

onSubmit()
{
    
    this.router.navigateByUrl('/home')
}
submit()
{
  
  this.router.navigate(['/offerride'])
}

chooseride()
{
  this.router.navigate(['/passenger'])
}
 
 

}
