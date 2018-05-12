import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[]=[];
  filteredProducts: Product[];
  categories$;
  category: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoryService) {
    this.productService.getAllProducts().subscribe(
      products => {
        this.filteredProducts = this.products = products
      });
    this.categories$ = this.categoryService.getCategories();

    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts =
        (this.category) ? this.products.filter(p => p.category  === this.category) :
          this.products;
    });
  }

  ngOnInit() {
  }

}
