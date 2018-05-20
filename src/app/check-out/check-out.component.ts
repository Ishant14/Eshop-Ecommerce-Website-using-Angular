import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartItem } from '../shared/models/shopping-cart-item';
import { ShoppingCart } from '../shared/models/shopping-cart';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { AppUser } from '../shared/models/app-user';
import {Order} from '../shared/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  private cartSubscription = new Subscription();
  private authSubscription = new Subscription();
  cart: ShoppingCart;
  userId: string;

  constructor(
    private router: Router, 
    private shoppingCartService: ShoppingCartService,
    private authService : AuthService,
    private orderService: OrderService) { }

  async placeOrder(shippingInfo) {
    let x = new Order(this.userId,shippingInfo,this.cart);

    let order = {
      userId : this.userId,
      datePlaced: new Date().getTime(),
      shipping: shippingInfo,
      items: this.cart.items.map(i => {
        return {
          product: {
            product: i.title,
            imageUrl: i.imageUrl,
            price: i.price
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice
        }
      })
    }
    let orderCreated = await this.orderService.storeOrder(order);
    this.router.navigate(['/order-success',orderCreated.key]);

  }

  async ngOnInit() {
    this.cartSubscription =
      (await this.shoppingCartService.getCart()).subscribe(cart => this.cart = cart);

      this.authSubscription= this.authService.user$.subscribe(x=>this.userId=x.uid);
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }

}
