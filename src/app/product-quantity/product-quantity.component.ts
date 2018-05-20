import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../shared/models/product';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent  {

  @Input('product') product;
  @Input('shopping-cart') shoppingCart;

  constructor(private shoppingCartServie: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product: Product){
    this.shoppingCartServie.addToCart(product);
  }

  removeFromCart(product:Product){
      this.shoppingCartServie.removefromCart(product);
  } 

}
