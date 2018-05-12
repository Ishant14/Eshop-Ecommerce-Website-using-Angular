import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  appUser: AppUser;

  constructor(public auth:AuthService) { 
    console.log("Inside navbar:"+auth.user$);
    auth.appUser$.subscribe(
      appUser=>{
        console.log("AppUser :"+appUser);
        this.appUser=appUser});
  }

  logout(){
    this.auth.logout();
  }
    
}
