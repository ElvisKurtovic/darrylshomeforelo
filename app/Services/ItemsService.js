import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";

class ItemsService {
    buyItem(id) {
        let temp = ProxyState.items
        let tempCart = ProxyState.cart
        let item = temp.find(i => i.id === id)

        tempCart.push(item)
        ProxyState.cart = tempCart
        // console.log(ProxyState.cart)
    }
    addMoney() {
        ProxyState.money += 20
    }
}

export const itemsService = new ItemsService();

