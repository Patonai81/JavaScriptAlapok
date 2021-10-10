import {modifyCheckBoxStateInArrayElement, percentage, removeArrayElement} from "./arrayFunctions.js";
import {renderImage, renderPercentage} from "./addScreenElements.js";

export const renderShoppingList = (list) => {
    const containerDivItem = document.querySelector("#bevElemek");
    containerDivItem.innerHTML = '';
    list.forEach((item, itemIndx) => {
        containerDivItem.innerHTML = containerDivItem.innerHTML + `<li>
        <div><input type="checkbox" id =list-ckb-id-${item.id} class="bevList-ckb" ${item.isBought === true ? "checked" : ""}> 
        <span class="${item.isBought === true ? "done" : "none"}"  ">${item.name} - ${item.difficulty}</span> 
        <img class="redx" id=list-redx-id-${item.id} src="https://thumbs.dreamstime.com/b/cross-red-icon-isolated-white-background-symbol-no-button-eps-104069585.jpg">
        </div></li>`;
    });
    registerListeneres(list);
    renderPercentage(list);
    renderImage(Number(percentage(list)));

}


const registerListeneres = (itemList) => {
    const checkList = document.querySelectorAll(".bevList-ckb");
    checkList.forEach((item) => item.addEventListener("click", event => modifyCheckBoxStateInArrayElement(event, itemList)));
    const redxList = document.querySelectorAll(".redx");
    redxList.forEach((item) => item.addEventListener("click", event => removeArrayElement(event, itemList)));

}




