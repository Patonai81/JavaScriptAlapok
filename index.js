import {createShoppingList, renderClickAction} from "./listRenderer.js";

const item1 = {
    name: 'Krumpli',
    isBought: false
}
const item2 = {
    name: 'Olaj',
    isBought: true
}
const item3 = {
    name: 'Tétta',
    isBought: false
}
const item4 = {
    name: 'Paprika',
    isBought: true
}
const item5 = {
    name: 'Hagyma',
    isBought: false
}

const itemList= [item1,item2,item3,item4,item5];

document.addEventListener("DOMContentLoaded",createShoppingList(itemList));
