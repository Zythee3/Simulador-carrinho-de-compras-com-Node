import { createItem } from './services/item.js'
import * as cartService from './services/cart.js'

const myCart = []

const item1 = await createItem("teste", 10.99, 3);
const item2 = await createItem("teste2", 10.99, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.calculateValue(myCart);
