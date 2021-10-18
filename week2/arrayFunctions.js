import {renderShoppingList} from "./listRenderer.js";

export const addArrayElement = (event, list) => {
    let max = 0;
    const newname = document.getElementById("new-name");
    const difficulty = document.getElementById("new-difficulty");
    if (newname.value ==='' || difficulty.value ===''){
        alert("A név és a nehézség mezőket kötelezően tölteni kell!");
        return;
    }
    if (difficulty.validity.rangeUnderflow || difficulty.validity.rangeOverflow) {
        alert("A megadott értéknek a 0..5 tartományban kell esnie");
        return;
    }

    if (list.length !== 0) {
        max = list.reduce(function (prev, current) {
            return (prev.id > current.id) ? prev : current
        })
    }
    const newListItem = {id: isNaN(Number(max.id) + 1) ? 1 : Number(max.id) + 1, name: newname.value, difficulty: difficulty.value};
    list.push(newListItem);
    renderShoppingList(list);

}

export const removeArrayElement = (event, itemList) => {
    const originalArrayId = event.target.id.replace("list-redx-id-", "");
    const index = itemList.findIndex(v => v.id === Number(originalArrayId));
    if (Number(index) !== -1) {
        itemList.splice(index, 1);
    }

    renderShoppingList(itemList);
}

export const modifyCheckBoxStateInArrayElement = (event, itemList) => {
    const inputs = document.querySelectorAll(".bevList-ckb");
    inputs.forEach((element, index) => {
        // chekckbox id-ból visszaalakítani a lista id-ra
        let originalArrayId = element.id.replace("list-ckb-id-", "");
        //find the actual array item
        let actualArrayItem = itemList.find(obj => {
            return obj.id === Number(originalArrayId);
        })
        actualArrayItem.isBought = element.checked;
    });
    renderShoppingList(itemList);

}

export const ascendingArrayOrderRender = (event, list) => {
    list.sort((a, b) => {
        console.log(a.difficulty + ":" + b.difficulty + "return " + (a.difficulty > b.difficulty ? 1 : -1));
        return a.difficulty > b.difficulty ? 1 : (a.difficulty === b.difficulty ? (a.name > b.name) ? 1 : -1 : -1);
    });
    renderShoppingList(list);
}

export const descendingArrayOrderRender = (event, list) => {
    list.sort((a, b) => {
        return a.difficulty < b.difficulty ? 1 : (a.difficulty === b.difficulty ? (a.name < b.name) ? 1 : -1 : -1);
    });
    renderShoppingList(list);
}


export const percentage = (list) => {
    const success = () => {
        return list.reduce((cumulate, item) => {
            if (item.isBought === true) {
                cumulate++;
            }
            return cumulate;
        }, 0);
    }
    const num = success() / list.length * 100;
    return Math.round((num + Number.EPSILON) * 100) / 100;

}

export const mostDifficultItem = (list) => {
    return list.reduce((cumulate, item) => {
        return item.difficulty > cumulate.difficulty ? item : cumulate;
    })
}