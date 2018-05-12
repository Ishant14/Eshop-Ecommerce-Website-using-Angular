import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs/Subscription';
import {Product} from '../../models/product';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})

export class AdminProductsComponent implements OnInit, OnDestroy {
  
  products: Product[] ;
  subscription: Subscription;
  fileteredProducts: Product[];
  tableResource: DataTableResource<Product>;
  items: Product[]=[];
  itemCount : number;

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAllProducts()
    .subscribe(products=> { 
      this.fileteredProducts=this.products=products;

      this.initializeTable(products);
    });
  }

  private initializeTable(products: Product[]){
    this.tableResource = new DataTableResource(products);
      this.tableResource.query({ offset:0 })
      .then(items => this.items = items);

      this.tableResource.count().
      then(count => this.itemCount = count);
  }

  reloadItem(params){
    if(!this.tableResource) return;

    this.tableResource.query(params)
    .then(items => this.items = items)
  }

  filter(query: string){
    this.fileteredProducts= 
    (query) ? this.products.filter(p=>p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) :
    this.products;

    this.initializeTable(this.fileteredProducts);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
