import { generateId } from "../Utils/GenerateId.js"

export default class Item {
    constructor({ title, price, description, quantity, imgUrl, id = generateId(), }) {
        this.title = title
        this.price = price
        this.description = description
        this.quantity = quantity
        this.imgUrl = imgUrl
        this.id = id
    }

    get Template() {

        return /*html*/`
        <div class="col-3 text-center">
                <img src="${this.imgUrl}" class="image-fluid w-75" alt="">
                <h3>${this.title}</h3>
                <p>${this.description}</p>
                <p>Price: ${this.price}</p>
                <p>Quantity: ${this.quantity}</p>
                <button className="btn btn-info" onclick="app.itemsController.buyItem('${this.id}')">Purchase</button>
            </div>
        `
    }
}