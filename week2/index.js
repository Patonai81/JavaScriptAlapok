import {registerPermanentListeners, renderShoppingList} from "./listRenderer.js";

const item1 = {
    id: 1,
    name: 'Krumpli',
    isBought: false,
    difficulty: 1
}
const item2 = {
    id: 2,
    name: 'HalOlaj',
    isBought: true,
    difficulty: 1
}
const item3 = {
    id: 3,
    name: 'Tétta',
    isBought: false,
    difficulty: 5
}
const item4 = {
    id: 4,
    name: 'Paprika',
    isBought: true,
    difficulty: 3
}
const item5 = {
    id: 5,
    name: 'Hagyma',
    isBought: false,
    difficulty: 2
}

const itemList= [item1,item2,item3,item4,item5];

document.addEventListener("DOMContentLoaded",renderShoppingList(itemList));
document.addEventListener("DOMContentLoaded",registerPermanentListeners(itemList));

