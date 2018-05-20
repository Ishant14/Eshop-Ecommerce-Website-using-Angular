import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  filteredProducts: Product[];
  category: string;
  cart;
  subscription : Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private shoppingCartService : ShoppingCartService
    ) {
    this.productService
      .getAllProducts()
      .switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts =
          (this.category) ? this.products.filter(p => p.category === this.category) :
            this.products;
      });
   
  }

  async ngOnInit() {
    this.subscription =(  await this.shoppingCartService.getCart()).subscribe(cart => this.cart= cart);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
