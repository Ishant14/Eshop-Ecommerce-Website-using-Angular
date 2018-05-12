# Eshop

Some Important concepts to learn from this project :


## SwitchMap Operator 

Switch Map operator is mainly used when you want have a scenario where you want your first observables to get complete and then execute the second Observables. Refer the code of the product compoenent as below:

```typescript

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
  ```















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
