import {renderShoppingList} from "./listRenderer.js";

export const addArrayElement = (event,list) =>{
    let max = 0;

    if (list.length !==0) {
        max = list.reduce(function (prev, current) {
            return (prev.id > current.id) ? prev : current
        })
    }
    const newname = document.getElementById("new-name").value;
    const difficulty = document.querySelector("#new-difficulty").value;
    const newListItem = {id: isNaN(Number(max.id)+1) ? 1 : Number(max.id)+1 , name: newname, difficulty: difficulty};
    list.push(newListItem);
    renderShoppingList(list);

}

export const removeArrayElement = (event,itemList)=>{
    const originalArrayId = event.target.id.replace("list-redx-id-","");
    const index=itemList.findIndex(v => v.id === Number(originalArrayId));
    if (Number(index) !== -1){
        itemList.splice(index, 1);
    }

    renderShoppingList(itemList);
}

export const modifyCheckBoxStateInArrayElement = (event, itemList) => {
    const inputs = document.querySelectorAll(".bevList-ckb");
    inputs.forEach((element, index) => {
        // chekckbox id-ból visszaalakítani a lista id-ra
        let originalArrayId = element.id.replace("list-ckb-id-","");
        //find the actual array item
        let actualArrayItem= itemList.find(obj => {
            return obj.id === Number(originalArrayId);
        })
        actualArrayItem.isBought = element.checked;
    });
    renderShoppingList(itemList);

}

export const percentage = (list) => {
    const success = () => {
        return list.reduce((cumulate, item) => {
            if (item.isBought=== true){
                cumulate++;
            }
            return cumulate;
        }, 0);
    }
    const num=success()/list.length*100;
    return Math.round((num + Number.EPSILON) * 100) / 100;

}