import {createShoppingList, renderClickAction} from "./listRenderer.js";

const item1 = {
    id: 1,
    name: 'Krumpli',
    isBought: false
}
const item2 = {
    id: 2,
    name: 'Olaj',
    isBought: true
}
const item3 = {
    id: 3,
    name: 'Tétta',
    isBought: false
}
const item4 = {
    id: 4,
    name: 'Paprika',
    isBought: true
}
const item5 = {
    id: 5,
    name: 'Hagyma',
    isBought: false
}

const itemList= [item1,item2,item3,item4,item5];

document.addEventListener("DOMContentLoaded",createShoppingList(itemList));
