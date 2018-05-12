# Eshop

Eshop is an ecommerce website developed using Angular 5 and Angular Firebase in the backened.   



Some Important concepts to learn from this project :


## SwitchMap Operator 

Switch Map operator is mainly used when you want have a scenario where you want your first observables to get complete and then execute the second Observables. Refer the code of the product compoenent as below:

```typescript

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
  ```
  
  In the above code the route.queryParamMap observables is dependent on the product , this obserbavles needs to be susbcribed only when we get all the products . Hence we have used the switchMap() operator here.


## take opetaor 

Sometime you dont want the subscription to remain untill the component is destroyed. Sometine you just want the first emitted value and then completed observables. In that case we use the **take** operator. **Take** operator take the first value from the observable and complete the observables . Refer the below code :

```typescript
if (this.id) {
      this.productService.getPoduct(this.id).take(1).subscribe(p => this.product = p);
    }
```

## When to use the routeparam observables? 

Whenever we need different route query paramter but we need to stay on the same component. In that we need to subscribe the route param observables. Lets take the example the of our applicaiton , we need to filter the proudcts on the basis of category (we are sending the category as query param ) but we need to stay on the same Product Component. Since it does not make any sense to reinitialise and destory the component everytime. So to make this happend we subscribed to the 
Activated Route param observables and got the category and filtered our products and remained on the same component.


# Project related Information 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
