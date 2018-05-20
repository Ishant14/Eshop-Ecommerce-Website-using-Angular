import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartItem } from '../shared/models/shopping-cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  totalItemCount : number;
  cart$ : Observable<ShoppingCart>;

  constructor(private shoppingCartService : ShoppingCartService) { }

  async ngOnInit() {
     this.cart$ = await this.shoppingCartService.getCart();
  }

  getTotalPriceOfProduct(item: ShoppingCartItem){
      return item.price * item.quantity;
  }

  clearCart(){
    this.shoppingCartService.clearCart();
  }

}
