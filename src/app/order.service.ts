import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService) { }


  async storeOrder(order) {
    let orderCreated = this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return orderCreated;
  }

  getOrders(){
    return this.db.list('/orders');
  }


}
