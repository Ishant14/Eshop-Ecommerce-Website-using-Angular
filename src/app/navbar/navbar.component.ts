import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../shared/models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../shared/models/shopping-cart';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  totalItemCount:number;

  constructor(public auth:AuthService, private shoppingCartService : ShoppingCartService) { 
  }

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser=> this.appUser=appUser);
    let cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe(x=>{
      this.totalItemCount =x.totalItemCount;
      console.log("Total COunt :"+x.totalItemCount);
    })
    
  }

  logout(){
    this.auth.logout();
  }
    
}
