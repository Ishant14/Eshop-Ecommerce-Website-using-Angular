import { ShoppingCartItem } from "./shopping-cart-item";
import "rxjs/add/operator/map";
import { Product } from "./product";
export class ShoppingCart {

    items: ShoppingCartItem[] = [];

    constructor(public itemsMap: { [produuctId: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || {};
        for (let productId in itemsMap) {
            let item = itemsMap[productId]
            this.items.push(new ShoppingCartItem({
                ...item,
                $key:productId
            }));
        }
    }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }

    get totalPrice() {
        let sum = 0;
        for (let productId in this.items) {
            sum += this.items[productId].totalPrice;
        }
        return sum;
    }

    get totalItemCount() {
        let count = 0;
        for (let product in this.items) {
            count += this.items[product].quantity;
        }
        return count;
    }
    
}