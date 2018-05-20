import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../shared/models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product;
  @Input('show-actions') showactions;
  @Input('shopping-cart') shoppingCart : ShoppingCart;

  constructor(private shoppingCartServie: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product: Product){
    this.shoppingCartServie.addToCart(product);
  }

}
