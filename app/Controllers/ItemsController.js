import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js";



//Private
function _draw() {
    let items = ProxyState.items;
    let template = ''

    items.forEach(i => template += i.Template)
    document.getElementById("items").innerHTML = /*html*/`
  
      ${template}
   `

    let cart = ProxyState.cart;
    let cartTemplate = ''
    cart.forEach(c => cartTemplate += c.Template)
    document.getElementById("cart").innerHTML =  /*html*/` "hello"

        ${cartTemplate}
    `
    console.log(ProxyState.cart)
    document.getElementById("money").innerText = `${ProxyState.money}`
}

//Public
export default class ItemsController {
    constructor() {
        ProxyState.on("items", _draw);
        ProxyState.on("money", _draw);
        ProxyState.on("cart", _draw);
        _draw()
    }

    buyItem(id) {
        itemsService.buyItem(id)
    }
    addMoney() {
        itemsService.addMoney()
    }
}
