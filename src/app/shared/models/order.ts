import {ShoppingCart} from './shopping-cart';

export class Order{
    datePlaced: number;
    items:any[];

    constructor(public userId:string, public shipping:any, public shoppingCart: ShoppingCart){
        userId= userId;
        this.datePlaced = new Date().getTime();

        this.items = this.shoppingCart.items.map(i => {
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
}