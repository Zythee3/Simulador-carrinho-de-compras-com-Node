import { createItem } from './services/item.js'
import * as cartService from './services/cart.js'

const myCart = []

const item1 = createItem("teclado musical", 50.99, 1);
const item2 = createItem("mouse", 10.99, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.displayCart(myCart);

await cartService.deleteItem(myCart, item1.name);

await cartService.removeItem(myCart, 2);
await cartService.displayCart(myCart);


await cartService.calculateValue(myCart);
