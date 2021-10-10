import {percentage} from "../arrayFunctions.js";

export const createShoppingList = (list) => {
    const containerDivItem = document.querySelector("#bevElemek");
    containerDivItem.innerHTML = '';
    list.forEach((item, itemIndx) => {
        containerDivItem.innerHTML = containerDivItem.innerHTML + `
        <div><input type="checkbox" id="bevListCKB" ${item.isBought === true ? "checked" : ""}> 
        ${item.isBought === true ? "<del>" : ""}<span style="color: ${item.isBought === false ? "red" : "black"} ">${item.name}</span> ${item.isBought === true ? "</del>" : ""}
        </div>`;
    });
    registerListeneres(list);
    renderPercentage(list);
    renderImage(Number(percentage(list)));

}


const registerListeneres = (itemList) => {
    const checkList = document.querySelectorAll("#bevListCKB");
    checkList.forEach((item) => item.addEventListener("click", event => renderClickAction(event, itemList)));

}

export const renderClickAction = (event, itemList) => {
    console.log("Clicked");
    const inputs = document.querySelectorAll("input");

    inputs.forEach((element, index) => {
        itemList[index].isBought = element.checked;
    });
    createShoppingList(itemList);

}

const renderPercentage = (itemList) => {
    const containerDivItem = document.querySelector("#summa");
    containerDivItem.innerHTML = `A bevásárlólista <span id="summa" style="font-size: ${percentage(itemList) / 2 > 0 ? percentage(itemList) / 2 : 10}px"> ${percentage(itemList)} </span> %-át teljesítetted`;
    const summa = document.getElementById("summa");
    summa.style.color = `${createColor(Number(percentage(itemList)))}`;


}

const renderImage = (number) => {
    const containerDivItem = document.querySelector("#pipa");
    if (number === 100) {
        containerDivItem.innerHTML = '<img src="https://www.tekportal.net/wp-content/uploads/2018/11/tick-off.jpg">';
    } else {
        containerDivItem.innerHTML='';
    }

}

const createColor = (percentage) => {
    console.log("aaa" + percentage);
    if (0 <= percentage && percentage < 40) return "red"
    if (40 <= percentage && percentage < 80) return "blue"
    else return "green"

}