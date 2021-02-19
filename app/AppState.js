import Item from "./Models/Item.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  money = 0

  /** @type {Value[]} */
  values = []
  /** @type {Item[]} */
  items = [new Item({ title: "Elo Socks", price: 50, description: "Socks for Getting Elo", quantity: 100, imgUrl: "https://cdn.shopify.com/s/files/1/1374/9575/products/10230_0_0x2_c0c9de70-0807-488f-ad15-6b250f5231d0.jpg?v=1582567247" }), new Item({ title: "Elo Socks", price: 50, description: "Socks for Getting Elo", quantity: 100, imgUrl: "https://cdn.shopify.com/s/files/1/1374/9575/products/10230_0_0x2_c0c9de70-0807-488f-ad15-6b250f5231d0.jpg?v=1582567247" })]

  cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
